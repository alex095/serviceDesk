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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TicketsService = (function () {
    function TicketsService(http) {
        this.http = http;
        console.log('Task Service Initialized...');
    }
    TicketsService.prototype.getTickets = function (login, status) {
        return this.http.get('http://localhost:3000/api/tickets/' + login + '/' + status)
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.getAdmTickets = function (queueId, status) {
        return this.http.get('http://localhost:3000/api/admtickets/' + queueId + '/' + status)
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.getAdmins = function () {
        return this.http.get('http://localhost:3000/api/getadmins/')
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.createTicket = function (ticket) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/createticket', JSON.stringify(ticket), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.logIn = function (logData) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/login', JSON.stringify(logData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.logInAdm = function (logData) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/loginadm', JSON.stringify(logData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.getQueues = function () {
        return this.http.get('http://localhost:3000/api/queues/')
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.getAnswers = function (id) {
        return this.http.get('http://localhost:3000/api/answers/' + id)
            .map(function (res) { return res.json(); });
    };
    TicketsService.prototype.addAnswer = function (answer) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/addanswer', JSON.stringify(answer), { headers: headers });
    };
    return TicketsService;
}());
TicketsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map