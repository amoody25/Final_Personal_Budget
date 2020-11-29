import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { AuthService } from 'src/app/services/auth.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { Observable, Subscription } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent implements OnInit {
  public expenses: Expense[] = [];
  expensesArray: Observable<DocumentChangeAction<unknown>[]>;

  expenseSubscription: Subscription;

  public totalExpenses: Expense[] = [];

  constructor(
    private expenseService: ExpenseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  // tslint:disable-next-line: typedef
  delete(expenseId: string) {
    this.expenseService.deleteExpense(expenseId);
  }

  // tslint:disable-next-line: typedef
  loadData() {
    this.expenseSubscription = this.expenseService
      .getExpenseById(this.authService.currentUserId)
      .subscribe((data) => {
        this.expenses = data.map((expense) => {
          return {
            id: expense.payload.doc.id,
            ...(expense.payload.doc.data() as Expense),
          };
        });

        const categoriesArray = this.expenses.filter(
          (expense, i, results) =>
            results.findIndex((x) => x.category === expense.category) === i
        );

        categoriesArray.forEach((x) => {
          this.totalExpenses.push({
            title: '',
            category: x.category,
            amount: this.expenses
              .filter((y) => y.category === x.category)
              .reduce((sum, current) => sum + current.amount, 0),
          } as Expense);
        });
      });
  }
}
