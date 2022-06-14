import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Balance } from '../model/balance';
import { Cheque } from '../model/cheque';

@Injectable()
export class ChequeService {

  private chequeUrl: string;
  private balanceUrl: string;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {
    this.chequeUrl = 'http://localhost:8083/api/cheques/';
    this.balanceUrl = 'http://localhost:8083/api/balances/';
  }

  public getChequesByClient(id): Observable<Cheque[]>{
    return this.http
      .get<Cheque[]>(this.chequeUrl + 'chequeByClient/' + id);
  }


  public chequePayed(id): Observable<any> {
    return this.http.post<any>(this.chequeUrl + 'payed/' +id, {
      body: {} }
    );
  }

  public getBalance(): Observable<any>{
    return this.http
      .get<any>(this.balanceUrl);
  }

  public getChequesByMonth(month): Observable<any>{
    return this.http
      .get<Cheque[]>(this.chequeUrl+ 'chequeByMonth/' + month);
  }

}
