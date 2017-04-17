"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var tickets_component_1 = require("./components/tickets/tickets.component");
var create_component_1 = require("./components/tickets/create.component");
var answers_component_1 = require("./components/tickets/answers.component");
var login_component_1 = require("./components/login/login.component");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'create', component: create_component_1.CreateComponent },
    { path: 'tickets/:login', component: tickets_component_1.TicketsComponent },
    { path: 'tickets/:login/answer/:id', component: answers_component_1.AnswersComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, tickets_component_1.TicketsComponent, login_component_1.LoginComponent, create_component_1.CreateComponent, answers_component_1.AnswersComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map