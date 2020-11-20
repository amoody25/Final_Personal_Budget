import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { AuthService } from 'src/app/services/auth.service';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[];

  constructor(
    private expenseService: ExpenseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.expenseService
      .getExpenseById(this.authService.currentUserId)
      .subscribe((data) => {
        this.expenses = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Expense),
          };
        });
      });
  }

  // tslint:disable-next-line: typedef
  delete(expenseId: string) {
    this.expenseService.deleteExpense(expenseId);
  }
}
