import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication_pages/login/login.component';
import { RegisterComponent } from './pages/authentication_pages/register/register.component';
import { UserinfoComponent } from './pages/authentication_pages/userinfo/userinfo.component';
import { AddBudgetComponent } from './pages/budget_pages/add-budget/add-budget.component';
import { BudgetComponent } from './pages/budget_pages/budget/budget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseComponent } from './pages/expense_pages/expense/expense.component';
import { AddExpenseComponent } from './pages/expense_pages/add-expense/add-expense.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NonUserNavComponent } from './components/non-user-nav/non-user-nav.component';
import { NonUserInfoComponent } from './components/non-user-info/non-user-info.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserinfoComponent,
    AddBudgetComponent,
    BudgetComponent,
    ExpenseComponent,
    AddExpenseComponent,
    NavbarComponent,
    NonUserNavComponent,
    NonUserInfoComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
