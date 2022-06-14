import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8083/api/test/';
const API_URL_USER = 'http://localhost:8083/api/users/';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  public findAll(): Observable<[any]> {
    return this.http.get<[any]>('http://localhost:8083/api/clients/');
  } 

  approved(user : any | null): Observable<any> {
    return this.http.post<any>(API_URL_USER + 'approved/' + user, {
      body: {} }
    );
  }

  disabled(user : any | null): Observable<any> {
    return this.http.post<any>(API_URL_USER + 'disabled/' + user, {
      body: {} }
    );
  }
}