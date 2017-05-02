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
var SwitchTicketsComponent = (function () {
    function SwitchTicketsComponent(TicketsService, route) {
        var _this = this;
        this.TicketsService = TicketsService;
        this.route = route;
        this.login = route.snapshot.parent.params['login'];
        route.params.subscribe(function (res) {
            _this.params = res;
            _this.TicketsService.getTickets(_this.login, _this.params.status)
                .subscribe(function (tickets) {
                _this.tickets = tickets;
            });
        });
    }
    return SwitchTicketsComponent;
}());
SwitchTicketsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'test',
        template: "<div *ngFor=\"let ticket of tickets\">\n              <div>\n                <p><a routerLink=\"../answer/{{ticket._id}}\">{{ ticket.title }} (<i>{{ ticket.status }}</i>) </a> <br /> {{ ticket.text }}</p>\n              </div>\n            </div>"
    }),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService, router_1.ActivatedRoute])
], SwitchTicketsComponent);
exports.SwitchTicketsComponent = SwitchTicketsComponent;
//# sourceMappingURL=switchtickets.component.js.map