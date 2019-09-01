import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/userList/UserList.page';
import { UserPage } from './pages/user/User.page';
import { LoginPage } from './pages/login/Login.page';
import { AuthGuard } from './services/Auth.guard';
import { Page404 } from './pages/page404/Page404.page';
import { AccountPage } from './pages/criarconta/Account.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'criarconta', component: AccountPage },
  { path: 'users', component: UserListPage, canActivate: [AuthGuard]},
  { path: 'user', component: UserPage, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserPage, canActivate: [AuthGuard]},
  { path: '**', component: Page404 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
