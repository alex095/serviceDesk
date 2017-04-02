import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Ticket } from '../../../Ticket';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'tickets',
  templateUrl: 'tickets.component.html',
})
export class TicketsComponent  {

  tickets: Ticket[];
  login: string;

  constructor(private TicketsService: TicketsService, private route: ActivatedRoute,){
    console.log(1111);
    route.params.subscribe(
      res => this.login = res.login
    );
    console.log(this.login);
    this.TicketsService.getTickets(this.login)
      .subscribe(tickets => {
        this.tickets = tickets;
      });
  }
}
