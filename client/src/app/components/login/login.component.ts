import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'log-in',
  templateUrl: 'login.component.html',
})
export class LoginComponent {  
  login: string;
  pwd: string;

  constructor(private ticketsService: TicketsService, private router: Router){}
  
  logIn(){
    var logData = {
      login: this.login,
      pwd: this.pwd
    }
    this.ticketsService.logIn(logData).subscribe(res => console.log(res));
    console.log(this.login);
    this.router.navigate(['/tickets/', this.login]);
  }


}