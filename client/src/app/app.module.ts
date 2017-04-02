import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tickets/:login', component: TicketsComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule , 
                  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, TicketsComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
