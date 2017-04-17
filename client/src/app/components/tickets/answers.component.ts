import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';

@Component({
  moduleId: module.id,
  selector: 'answer',
  templateUrl: 'answers.component.html'
})

export class AnswersComponent {

    tickets: any[];
    id: string;
    login: string;
    answerText: string;
    
    constructor(private router: Router, private route: ActivatedRoute, private TicketsService: TicketsService) {
      this.login = this.route.snapshot.params['login'];
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
        id: this.id,
        author: this.login,
        text: this.answerText
      };

      this.TicketsService.addAnswer(newAnswer).
        subscribe(() => {
          this.tickets[0].answers.push(newAnswer);
          this.answerText = null;
        });
        
    }

 }