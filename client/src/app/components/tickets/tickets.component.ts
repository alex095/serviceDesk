import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Ticket } from '../../classes/Ticket';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'tickets',
  templateUrl: 'tickets.component.html',
})
export class TicketsComponent  {

  tickets: Ticket[];
  params: any;
  login: string;

  constructor(private TicketsService: TicketsService, private route: ActivatedRoute){
    route.params.subscribe(
      res => this.params = res
    );
    this.login = this.params.login;
    this.TicketsService.getTickets(this.params.login)
      .subscribe(tickets => {
        this.tickets = tickets;
      });
  }
}
