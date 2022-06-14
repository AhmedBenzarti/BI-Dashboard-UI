import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
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