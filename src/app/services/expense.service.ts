import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private firestore: AngularFirestore) {}

  // tslint:disable-next-line: typedef
  getExpense() {
    return this.firestore.collection('expenses').snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  getExpenseById(userId: string) {
    return this.firestore
      .collection('expenses/', (ref) => ref.where('userId', '==', userId))
      .snapshotChanges();
  }
  // tslint:disable-next-line: typedef
  addExpense(expense: Expense) {
    return this.firestore.collection('expenses').add(expense);
  }

  // tslint:disable-next-line: typedef
  // updateExpense(expenseId: string) {}

  // tslint:disable-next-line: typedef
  deleteExpense(expenseId: string) {
    this.firestore.doc('expenses/' + expenseId).delete();
  }
}
