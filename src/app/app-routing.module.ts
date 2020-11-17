import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/authentication_pages/login/login.component';
import { RegisterComponent } from './pages/authentication_pages/register/register.component';
import { UserinfoComponent } from './pages/authentication_pages/userinfo/userinfo.component';
import { AddBudgetComponent } from './pages/budget_pages/add-budget/add-budget.component';
import { BudgetComponent } from './pages/budget_pages/budget/budget.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user_info', component: UserinfoComponent },
  { path: 'add_budget', component: AddBudgetComponent },
  { path: 'my_budget', component: BudgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
