import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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


@NgModule({
  declarations: [
    AppComponent,
    UserBizertComponent,
    UserTunisComponent,
    BoardAdminComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent                 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [ClientService,HttpClientModule, authInterceptorProviders, TokenStorageService, UserService, AuthService,PowerBIEmbedModule],
  bootstrap: [AppComponent,PowerBIReportEmbedComponent]
})
export class AppModule { }
