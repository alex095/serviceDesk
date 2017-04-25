import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ticket } from '../../classes/Ticket';

@Component({
  moduleId: module.id,
  selector: 'test',
  templateUrl: 'create.component.html',
})

export class CreateComponent  {

  queues: any;
  ticket: Ticket = new Ticket();


  constructor(private router: Router, private route: ActivatedRoute, private TicketsService: TicketsService){
    this.ticket.author_login = this.route.snapshot.params['login'];
    this.TicketsService.getQueues()
      .subscribe(queues => {
        this.queues = queues;
      });
  }

  createTicket(){
    this.ticket.answers = [];
    this.TicketsService.createTicket(this.ticket)
      .subscribe(ticket => {
        this.router.navigate(['/tickets/', this.ticket.author_login]);
      });
  }

}