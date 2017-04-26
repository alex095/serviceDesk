import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { Ticket } from '../../classes/Ticket';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'admtickets',
  templateUrl: 'admtickets.component.html',
})
export class AdmTicketsComponent  {

  params: any;
  queue: string;
  login: string;

  constructor(private TicketsService: TicketsService, private route: ActivatedRoute){
    route.params.subscribe(
      res => this.params = res
    );
    this.queue = this.params.queue;
    this.login = this.params.login;
  }
}