import { Component } from '@angular/core';
import { TicketsService } from './services/tickets.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ TicketsService ]
})
export class AppComponent  { }
