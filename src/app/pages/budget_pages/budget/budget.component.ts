import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  budgets: Budget[];

  constructor(
    private budgetService: BudgetService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.budgetService.getBudget().subscribe((data) => {
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
