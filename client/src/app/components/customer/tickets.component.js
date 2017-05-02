"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tickets_service_1 = require("../../services/tickets.service");
var router_1 = require("@angular/router");
var TicketsComponent = (function () {
    function TicketsComponent(TicketsService, route) {
        var _this = this;
        this.TicketsService = TicketsService;
        this.route = route;
        route.params.subscribe(function (res) { return _this.params = res; });
        this.login = this.params.login;
        /*this.TicketsService.getTickets(this.params.login)
          .subscribe(tickets => {
            this.tickets = tickets;
          });*/
    }
    return TicketsComponent;
}());
TicketsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tickets',
        templateUrl: 'tickets.component.html',
    }),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService, router_1.ActivatedRoute])
], TicketsComponent);
exports.TicketsComponent = TicketsComponent;
//# sourceMappingURL=tickets.component.js.map