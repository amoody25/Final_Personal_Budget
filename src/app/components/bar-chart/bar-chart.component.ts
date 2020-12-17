import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { AuthService } from 'src/app/services/auth.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';
import { Budget } from 'src/app/models/budget.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  expenses: Expense[] = [];
  public multi: any = [];
  budgetResults: Budget[] = [];
  totalExpenseResults: Expense[] = [];
  expenseSubscription: Subscription;
  budgetSubscription: Subscription;

  public view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Budget';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };
  constructor(
    private expenseService: ExpenseService,
    private budgetService: BudgetService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.expenseSubscription.unsubscribe();
    this.budgetSubscription.unsubscribe();
  }

  loadChartData(): void {
    this.budgetSubscription = this.budgetService
      .getBudgetById(this.authService.currentUserId)
      .subscribe((budgetData) => {
        this.budgetResults = budgetData.map((budget) => {
          return {
            id: budget.payload.doc.id,
            ...(budget.payload.doc.data() as Budget),
          };
        });
        this.expenseSubscription = this.expenseService
          .getExpenseById(this.authService.currentUserId)
          .subscribe((expenseData) => {
            this.expenses = expenseData.map((expense) => {
              return {
                id: expense.payload.doc.id,
                ...(expense.payload.doc.data() as Expense),
              };
            });

            const categoriesArray = this.expenses.filter(
              (expense, i, results) =>
                results.findIndex(
                  (budget) => budget.category === expense.category
                ) === i
            );

            categoriesArray.forEach((budget) => {
              this.totalExpenseResults.push({
                title: '',
                category: budget.category,
                amount: this.expenses
                  .filter((expense) => expense.category === budget.category)
                  .reduce((sum, current) => sum + current.amount, 0),
              } as Expense);
            });

            this.budgetResults.forEach((budget) => {
              this.multi.push({
                name: budget.title,
                series: [
                  {
                    // tslint:disable-next-line: quotemark
                    name: 'budget',
                    value: budget.amount,
                  },
                  {
                    // tslint:disable-next-line: quotemark
                    name: 'expense',
                    value: this.totalExpenseResults
                      .filter((expense) => expense.category === budget.title)
                      // .map((expObj) => expObj.amount),
                      .reduce((sum, current) => current.amount, 0),
                  },
                ],
              });
            });
            this.multi = [...this.multi];
          });
      });
  }
}
