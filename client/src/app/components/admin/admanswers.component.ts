import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';

@Component({
  moduleId: module.id,
  selector: 'admanswer',
  templateUrl: 'admanswers.component.html'
})

export class AdmAnswersComponent {

    tickets: any[];
    id: string;
    login: string;
    answerText: string;
    queue: string;
    nextStatus: string = 'opened';
    admins: string[] = [];

    
    constructor(private router: Router, private route: ActivatedRoute, private TicketsService: TicketsService) {
      this.login = this.route.snapshot.params['login'];
      this.queue = this.route.snapshot.params['queue'];
      this.getAnswers(this.route.snapshot.params['id']);
      this.checkAdmin();
    }


    getAnswers(id: string){
        this.TicketsService.getAnswers(id)
            .subscribe(tickets => {
                this.tickets = tickets;
                this.id = id;
            });
    }

    sendAnswer(){
      var newAnswer = {
        nextStatus: this.nextStatus,
        id: this.id,
        author: this.login,
        text: this.answerText
      };

      this.TicketsService.addAnswer(newAnswer).
        subscribe(() => {
          this.tickets[0].answers.push(newAnswer);
          this.answerText = null;
          this.tickets[0].status = this.nextStatus;
        });
        
    }

    checkAdmin(){
      this.TicketsService.getAdmins().
        subscribe(admins => {
          for(let admin in admins){
            this.admins.push(admins[admin].login);
          }
        });
    }

    answerStyle(author: string){
      for(let admin of this.admins){
        if(admin == author){
          return 'blue';
        }
      }
      return 'green';      
    }

 }