import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CreateComponent } from './components/tickets/create.component';
import { AnswersComponent } from './components/tickets/answers.component';
import { AdmAnswersComponent } from './components/tickets/admanswers.component';
import { AdmTicketsComponent } from './components/tickets/admtickets.component';
import { SwitchTicketsComponent } from './components/tickets/switchtickets.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tickets/:login/create', component: CreateComponent },
  { path: 'tickets/:login', component: TicketsComponent },
  { path: 'tickets/:login/answer/:id', component: AnswersComponent },
  { path: 'admtickets/:login/:queue', component: AdmTicketsComponent,children: [
                    {
                        path: ':status',    
                        component: SwitchTicketsComponent,
                    }]},
  { path: 'admtickets/:login/:queue/answer/:id', component: AdmAnswersComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule , 
                  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, TicketsComponent, LoginComponent, CreateComponent, AnswersComponent, AdmTicketsComponent, AdmAnswersComponent, SwitchTicketsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
