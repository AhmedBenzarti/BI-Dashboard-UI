import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.scss']
})
export class ModifierUserComponent implements OnInit {
  content?: string;
  users: any[] | undefined;
  message: String | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.userService.findAll().subscribe(data => {
      console.log(data)
      this.users = data;
    });
  }
  approved(user : any){
    this.userService.approved(user).subscribe(data => {
      this.message = data;
      });
    location.reload();

  }
  disabled({ user }: { user: any; }){
    this.userService.disabled(user).subscribe(data => {
      this.message = data;
      });
    location.reload();

  }
}