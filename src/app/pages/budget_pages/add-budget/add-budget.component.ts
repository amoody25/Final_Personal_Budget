import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.scss'],
})
export class AddBudgetComponent implements OnInit {
  constructor(
    private budgetService: BudgetService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  budgetForm = this.formBuilder.group({
    title: ['', Validators.required],
    amount: ['', Validators.required],
    // creationDate: ['', Validators.required],
  });

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  createBudget(budget: Budget) {
    this.budgetService.addBudget(budget);
  }

  // tslint:disable-next-line: typedef
  onSubmit(): void {
    const addBudget: Budget = {
      userId: this.authService.currentUserId,
      // tslint:disable-next-line: no-string-literal
      title: this.budgetForm.controls['title'].value,
      // tslint:disable-next-line: no-string-literal
      amount: this.budgetForm.controls['amount'].value,
    };
    this.budgetForm.reset();
    this.createBudget(addBudget);
  }
}
