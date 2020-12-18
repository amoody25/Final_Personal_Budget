import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget.model';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  budgets: Budget[] = [];
  editState: boolean = false;
  budgetUpdate: Budget;

  budgetSubscription: Subscription;

  constructor(
    public budgetService: BudgetService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadBudgets();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.budgetSubscription.unsubscribe();
  }

  loadBudgets(): void {
    this.budgetSubscription = this.budgetService
      .getBudgetById(this.authService.currentUserId)
      .subscribe((data) => {
        this.budgets = data.map((budget) => {
          return {
            id: budget.payload.doc.id,
            ...(budget.payload.doc.data() as Budget),
          };
        });
      });
  }
  // tslint:disable-next-line: typedef
  update(event, budget: Budget) {
    this.editState = true;
    this.budgetUpdate = budget;
    // this.budgetService.updateBudget(budget);
  }

  // tslint:disable-next-line: typedef
  delete(budgetId: string) {
    this.budgetService.deleteBudget(budgetId);
  }
}
