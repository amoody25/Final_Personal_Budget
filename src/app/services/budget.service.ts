import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Budget } from '../models/budget.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(private firestore: AngularFirestore) {}

  // tslint:disable-next-line: typedef
  getBudget() {
    return this.firestore.collection('budgets').snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  getBudgetById(user: User) {
    return this.firestore
      .collection('budgets/' + user.userId)
      .snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  addBudget(budget: Budget) {
    return this.firestore.collection('budgets').add(budget);
  }

  // tslint:disable-next-line: typedef
  updateBudget(budget: Budget) {
    return this.firestore.doc('budgets/' + budget.userId).update(budget);
  }

  // tslint:disable-next-line: typedef
  deleteBudget(budgetId: string) {
    this.firestore.doc('budgets/' + budgetId).delete();
  }
}
