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

  getAdmTickets(queueId:string){
    return this.http.get('http://localhost:3000/api/admtickets/' + queueId)
      .map(res => res.json());
  }

  createTicket(ticket: any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/createticket', JSON.stringify(ticket), {headers:headers})
      .map(res => res.json());
  }

  logIn(logData: Object){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/login', JSON.stringify(logData), {headers:headers})
      .map(res => res.json());
  }

  logInAdm(logData: Object){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/loginadm', JSON.stringify(logData), {headers:headers})
      .map(res => res.json());
  }

  getQueues(){
    return this.http.get('http://localhost:3000/api/queues/')
      .map(res => res.json());
  }

  getAnswers(id: string){
    return this.http.get('http://localhost:3000/api/answers/' + id)
      .map(res => res.json());
  }

  addAnswer(answer: any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addanswer', JSON.stringify(answer), {headers:headers});
  }

}