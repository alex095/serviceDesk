import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketsService{
  constructor(private http: Http){
    console.log('Task Service Initialized...');
  }

  getTickets(login:string){
    return this.http.get('http://localhost:3000/api/tickets/' + login)
      .map(res => res.json());
  }

  logIn(logData: Object){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/login', JSON.stringify(logData), {headers:headers})
      .map(res => res.json());
  }

}