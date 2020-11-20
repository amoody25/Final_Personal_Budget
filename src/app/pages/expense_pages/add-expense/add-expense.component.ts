import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expense } from 'src/app/models/expense.model';
import { AuthService } from 'src/app/services/auth.service';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
  constructor(
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  expenseForm = this.formBuilder.group({
    title: ['', Validators.required],
    amount: ['', Validators.required],
    category: ['', Validators.required],
    // creationDate: ['', Validators.required],
  });

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  createExpense(expense: Expense) {
    this.expenseService.addExpense(expense);
  }

  // tslint:disable-next-line: typedef
  onSubmit(): void {
    const addExpense: Expense = {
      userId: this.authService.currentUserId,
      title: this.expenseForm.controls['title'].value,
      amount: this.expenseForm.controls['amount'].value,
      category: this.expenseForm.controls['category'].value,
    };
    this.expenseForm.reset();
    this.createExpense(addExpense);
  }
}
