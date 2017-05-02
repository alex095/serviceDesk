import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Ticket } from '../../classes/Ticket';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'test',
  template: `<div *ngFor="let ticket of tickets">
              <div>
                <p><a routerLink="../answer/{{ticket._id}}">{{ ticket.title }} (<i>{{ ticket.status }}</i>) </a> <br /> {{ ticket.text }}</p>
              </div>
            </div>`
})
export class SwitchTicketsComponent {

  tickets: Ticket[];
  params: any;
  queue: string;
  login: string;
  status: string;

  constructor(private TicketsService: TicketsService, private route: ActivatedRoute){
    this.login = route.snapshot.parent.params['login'];
    route.params.subscribe(
      res => {
        this.params = res;
        this.TicketsService.getTickets(this.login, this.params.status)
          .subscribe(tickets => {
            this.tickets = tickets;
        });
      }
    );
  }
}
