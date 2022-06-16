import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './service/token-storage.service';

// Handles the embed config response for embedding
export interface ConfigResponse {
  Id: string;
  EmbedUrl: string;
  EmbedToken: {
    Token: string;
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  balance: any;
  location: any;

  constructor(private tokenStorageService: TokenStorageService,  private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      console.log("User", user);
      this.username = user.username;
      
      
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
    window.location.reload();
  }
}