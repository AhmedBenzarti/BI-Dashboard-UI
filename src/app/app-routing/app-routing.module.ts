import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from '../board-admin/board-admin.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ModifierUserComponent } from '../modifier-user/modifier-user.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { UserAddComponent } from '../user-add/user-add.component';
import { UsersComponent } from '../users/users.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users-add', component: UserAddComponent },
  { path: 'users-delete', component: DeleteUserComponent },
  { path: 'users-modif', component: ModifierUserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }