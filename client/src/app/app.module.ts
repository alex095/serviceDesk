import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TicketsComponent } from './components/customer/tickets.component';
import { CreateComponent } from './components/customer/create.component';
import { AnswersComponent } from './components/customer/answers.component';
import { AdmAnswersComponent } from './components/admin/admanswers.component';
import { AdmTicketsComponent } from './components/admin/admtickets.component';
import { AdmSwitchTicketsComponent } from './components/admin/admswitchtickets.component';
import { SwitchTicketsComponent } from './components/customer/switchtickets.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tickets/:login/create', component: CreateComponent },
  { path: 'tickets/:login', component: TicketsComponent, children: [
                    {
                        path: ':status',
                        component: SwitchTicketsComponent,
                    }] },
  { path: 'tickets/:login/answer/:id', component: AnswersComponent },
  { path: 'admtickets/:login/:queue', component: AdmTicketsComponent,children: [
                    {
                        path: ':status',
                        component: AdmSwitchTicketsComponent,
                    }]},
  { path: 'admtickets/:login/:queue/answer/:id', component: AdmAnswersComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, TicketsComponent, LoginComponent, CreateComponent, AnswersComponent,
                  AdmTicketsComponent, AdmAnswersComponent, AdmSwitchTicketsComponent, SwitchTicketsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule { }
