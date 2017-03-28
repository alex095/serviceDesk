import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';

@Component({
  moduleId: module.id,
  selector: 'log-in',
  templateUrl: 'login.component.html',
})
export class LoginComponent {  
  login: string;
  pwd: string;

  constructor(private ticketsService: TicketsService){}
  
  logIn(){
    var logData = {
      login: this.login,
      pwd: this.pwd
    }
    this.ticketsService.logIn(logData).subscribe(res => console.log(res));
  }


}