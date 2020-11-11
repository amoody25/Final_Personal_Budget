import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any = null;

  constructor(private afu: AngularFireAuth, private router: Router) {
    this.afu.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  // firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return this.authState !== null ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return this.authState !== null ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  // tslint:disable-next-line: typedef
  registerWithEmail(email: string, password: string) {
    return this.afu
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  // tslint:disable-next-line: typedef
  loginWithEmail(email: string, password: string) {
    return this.afu
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  // tslint:disable-next-line: typedef
  signout(): void {
    this.afu.signOut();
    this.router.navigate(['/login']);
  }
}
