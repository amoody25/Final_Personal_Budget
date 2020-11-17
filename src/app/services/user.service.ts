import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  // tslint:disable-next-line: typedef
  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  getUserByID(user: User) {
    return this.firestore.collection('users/' + user.userId).snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  addUser(payload: User) {
    return this.firestore.collection('users').add(payload);
  }

  // tslint:disable-next-line: typedef
  updateUser(user: User, payload: User) {
    return this.firestore.doc('users/' + user.userId).update(payload);
  }

  // tslint:disable-next-line: typedef
  deleteUser(user: User) {
    return this.firestore.doc('users/' + user.userId).delete();
  }
}
