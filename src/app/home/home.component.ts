import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content?: string;
  location: string[] = [];
  private roles: string[] = [];
  showAdminBoard = false;
  // token : string |null= "" ;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      let token = this.tokenStorage.getLocation()
      if(token != null){
        this.location.push(token.substring(1,token.length -1));
      }
    
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}