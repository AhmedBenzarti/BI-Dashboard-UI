import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../register/roles';

const AUTH_API = 'http://localhost:8083/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string | null, name: string |null, email: string | null, tel: string | null, role: string  , password: string | null, location: string |null): Observable<any> {
    console.log("tel",tel)
    console.log("role",role)
    let numtel = tel;
    let setRole: Set<string> = new Set<string>();
    setRole.add(role)
    console.log("tel",numtel)
    console.log("role",setRole)
    return this.http.post(AUTH_API + 'signup', {
      username,
      name,
      email,
      numtel,
      setRole,
      password,
      location
    }, httpOptions);
  }
} 