import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonUserInfoComponent } from './components/non-user-info/non-user-info.component';
import { LoginComponent } from './pages/authentication_pages/login/login.component';
import { RegisterComponent } from './pages/authentication_pages/register/register.component';
import { UserinfoComponent } from './pages/authentication_pages/userinfo/userinfo.component';
import { BudgetComponent } from './pages/budget_pages/budget/budget.component';

const routes: Routes = [
  { path: '', redirectTo: 'non-user-info', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user_info', component: UserinfoComponent },
  { path: 'my_budget', component: BudgetComponent },
  { path: 'non-user-info', component: NonUserInfoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
