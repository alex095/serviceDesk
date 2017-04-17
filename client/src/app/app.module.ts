import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CreateComponent } from './components/tickets/create.component';
import { AnswersComponent } from './components/tickets/answers.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'tickets/:login', component: TicketsComponent },
  { path: 'tickets/:login/answer/:id', component: AnswersComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule , 
                  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, TicketsComponent, LoginComponent, CreateComponent, AnswersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
