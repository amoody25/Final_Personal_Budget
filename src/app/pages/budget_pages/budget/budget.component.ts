import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  budgets: Budget[];

  constructor(
    public budgetService: BudgetService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.budgetService
      .getBudgetById(this.authService.currentUserId)
      .subscribe((data) => {
        this.budgets = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Budget),
          };
        });
      });
  }
  // tslint:disable-next-line: typedef
  update(budget: Budget) {
    this.budgetService.updateBudget(budget);
  }

  // tslint:disable-next-line: typedef
  delete(budgetId: string) {
    this.budgetService.deleteBudget(budgetId);
  }
}
