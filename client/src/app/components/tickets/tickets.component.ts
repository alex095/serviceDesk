import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Ticket } from '../../../Ticket';

@Component({
  moduleId: module.id,
  selector: 'tickets',
  templateUrl: 'tickets.component.html',
})
export class TicketsComponent  {

  tickets: Ticket[];

  constructor(private TicketsService: TicketsService){
    this.TicketsService.getTickets()
      .subscribe(tickets => {
        this.tickets = tickets;
      });
  }
}
