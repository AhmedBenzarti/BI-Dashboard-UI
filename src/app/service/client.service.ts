import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ClientService {

  private clientsUrl: string;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {
    this.clientsUrl = 'http://localhost:8083/api/clients/';
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  public findnotPayedClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl+'pclients');
  }

  public save(client: Client) : Observable<any> {
    return this.http.post<Client>(this.clientsUrl, client, { headers: this.headers });
  }

  public getClientbyId(id : any){
    return this.http
      .get<Client>(this.clientsUrl + 'idClient/' + id);
  }

  deleteClient(id : any) {
    //const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http
      .delete(this.clientsUrl + id,{
      }).subscribe();
  }

}
