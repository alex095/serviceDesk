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
var tickets_component_1 = require("./components/customer/tickets.component");
var create_component_1 = require("./components/customer/create.component");
var answers_component_1 = require("./components/customer/answers.component");
var admanswers_component_1 = require("./components/admin/admanswers.component");
var admtickets_component_1 = require("./components/admin/admtickets.component");
var admswitchtickets_component_1 = require("./components/admin/admswitchtickets.component");
var switchtickets_component_1 = require("./components/customer/switchtickets.component");
var login_component_1 = require("./components/login/login.component");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'tickets/:login/create', component: create_component_1.CreateComponent },
    { path: 'tickets/:login', component: tickets_component_1.TicketsComponent, children: [
            {
                path: ':status',
                component: switchtickets_component_1.SwitchTicketsComponent,
            }
        ] },
    { path: 'tickets/:login/answer/:id', component: answers_component_1.AnswersComponent },
    { path: 'admtickets/:login/:queue', component: admtickets_component_1.AdmTicketsComponent, children: [
            {
                path: ':status',
                component: admswitchtickets_component_1.AdmSwitchTicketsComponent,
            }
        ] },
    { path: 'admtickets/:login/:queue/answer/:id', component: admanswers_component_1.AdmAnswersComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, tickets_component_1.TicketsComponent, login_component_1.LoginComponent, create_component_1.CreateComponent, answers_component_1.AnswersComponent,
            admtickets_component_1.AdmTicketsComponent, admanswers_component_1.AdmAnswersComponent, admswitchtickets_component_1.AdmSwitchTicketsComponent, switchtickets_component_1.SwitchTicketsComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map