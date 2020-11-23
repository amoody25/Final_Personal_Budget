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
  public expenses: Expense[];

  constructor(
    private expenseService: ExpenseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
    // this.sumExpenses();
  }

  // tslint:disable-next-line: typedef
  delete(expenseId: string) {
    this.expenseService.deleteExpense(expenseId);
  }

  // tslint:disable-next-line: typedef
  loadData() {
    this.expenseService
      .getExpenseById(this.authService.currentUserId)
      .subscribe((data) => {
        this.expenses = data.map((expense) => {
          return {
            id: expense.payload.doc.id,
            ...(expense.payload.doc.data() as Expense),
          };
        });
      });
  }

  // tslint:disable-next-line: typedef
  // sumExpenses() {
  //   this.expenseService
  //     .getExpenseById(this.authService.currentUserId)
  //     .subscribe((data) => {
  //       this.expenseArray = data.map((expense) => {
  //         return {
  //           id: expense.payload.doc.id,
  //           ...(expense.payload.doc.data() as Expense),
  //         };
  //       });
  //     });
  //   if (this.expenseArray === undefined) {
  //     console.log('array is undefined!');
  //   } else {
  //     console.log('got here!');
  //     this.expenseArray.forEach((expense) => {
  //       console.log('Category:' + expense.category);
  //     });
  //   }
  // }
}
