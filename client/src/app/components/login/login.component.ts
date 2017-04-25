import { Component, Input } from '@angular/core';
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
  isadmin: boolean = false;
  error: string;
  
  constructor(private ticketsService: TicketsService, private router: Router){}

  logIn(){
    var logData = {
      login: this.login,
      pwd: this.pwd
    }
    if(this.isadmin){
      this.adminLogin(logData);
    }else{
      this.userLogin(logData);
    }
  }

  userLogin(logData: Object){
    this.ticketsService.logIn(logData).subscribe(res => {
      if(!res || this.pwd === undefined){
        this.error = 'Invalid login or password';
        return;
      }else{
        this.router.navigate(['/tickets/', this.login]);
      }
    });
    
  }
  
  adminLogin(logData: Object){
    this.ticketsService.logInAdm(logData).subscribe(res => {
      if(!res || this.pwd === undefined){
        this.error = 'Invalid login or password';
        return;
      }else{
        console.log(res);
        this.router.navigate(['/admtickets/', res.login, res.queue]);
      }
    });
  }
    
   


  

  

}