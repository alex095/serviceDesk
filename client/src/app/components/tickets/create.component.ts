import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';

@Component({
  moduleId: module.id,
  selector: 'test',
  templateUrl: 'create.component.html',
})

export class CreateComponent  {

  queues: any;

  constructor(private TicketsService: TicketsService){
    this.TicketsService.getQueues()
      .subscribe(queues => {
        this.queues = queues;
      });
  }
}