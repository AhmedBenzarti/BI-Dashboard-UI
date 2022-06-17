import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserBizertComponent } from './user-bizert/user-bizert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTunisComponent } from './user-tunis/user-tunis.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ClientService } from './service/client.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TokenStorageService } from './service/token-storage.service';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PowerBIEmbedModule, PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { routingComponents } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserBizertComponent,
    UserTunisComponent,
    BoardAdminComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,  
    UsersComponent             
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PowerBIEmbedModule,
    ReactiveFormsModule 
  ],
  providers: [ClientService,HttpClientModule, authInterceptorProviders, UsersComponent,TokenStorageService, UserService, AuthService,PowerBIEmbedModule],
  bootstrap: [AppComponent,PowerBIReportEmbedComponent]
})
export class AppModule { }
