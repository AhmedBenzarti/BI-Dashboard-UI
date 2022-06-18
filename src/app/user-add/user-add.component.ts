import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from '../model/form';
import { Countrys } from '../register/countrys';
import { Roles } from '../register/roles';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  form1: FormGroup ;
  form: Form = new Form();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  countrys: Countrys[];
  roles: Roles[] = [
    {name: 'Administrateur', code: 'admin'},
    {name: 'Utilisateur', code: 'user'},
];
  selectedCity: any;

  constructor(private authService: AuthService,private formBuilder: FormBuilder) {

    this.form1 = this.formBuilder.group({
      roles: [{name: 'Administrateur', code: 'admin'},
      {name: 'Utilisateur', code: 'user'},],
      countrys: [{name: 'Tunis'},
      {name: 'bizert'},]
    });
    
  //   this.roles = [
  //     {name: 'Administrateur', code: 'admin'},
  //     {name: 'Utilisateur', code: 'user'},
  // ];
  this.countrys = [
    {name: 'Tunis'},
    {name: 'bizert'},
  ];
   }

  ngOnInit(): void {
    this.form = new Form();

    
  }

  onSubmit(): void {
    const { username, email, password, name, tel, role, country} = this.form;
    // let lmySet: Set<string> = new Set<string>();
    // lmySet.add(role)
    console.log("username, email, password, name, tel, location, role",username, email, password, name, tel, country, role)
    this.authService.register(username, name, email, tel, role, password, country ).subscribe(
      (data: any )=> {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    window.location.reload();
  }
}