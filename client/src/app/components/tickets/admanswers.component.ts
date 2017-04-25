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

    
    constructor(private router: Router, private route: ActivatedRoute, private TicketsService: TicketsService) {
      this.login = this.route.snapshot.params['login'];
      this.queue = this.route.snapshot.params['queue'];
      this.getAnswers(this.route.snapshot.params['id']);
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

 }