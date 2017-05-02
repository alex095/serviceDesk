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
var router_1 = require("@angular/router");
var tickets_service_1 = require("../../services/tickets.service");
var AnswersComponent = (function () {
    function AnswersComponent(router, route, TicketsService) {
        this.router = router;
        this.route = route;
        this.TicketsService = TicketsService;
        this.nextStatus = 'opened';
        this.admins = [];
        this.checkAdmin();
        this.login = this.route.snapshot.params['login'];
        this.getAnswers(this.route.snapshot.params['id']);
    }
    AnswersComponent.prototype.getAnswers = function (id) {
        var _this = this;
        this.TicketsService.getAnswers(id)
            .subscribe(function (tickets) {
            _this.tickets = tickets;
            _this.id = id;
        });
    };
    AnswersComponent.prototype.sendAnswer = function () {
        var _this = this;
        var newAnswer = {
            nextStatus: this.nextStatus,
            id: this.id,
            author: this.login,
            text: this.answerText
        };
        this.TicketsService.addAnswer(newAnswer).
            subscribe(function () {
            _this.tickets[0].answers.push(newAnswer);
            _this.answerText = null;
            _this.tickets[0].status = _this.nextStatus;
        });
    };
    AnswersComponent.prototype.checkAdmin = function () {
        var _this = this;
        this.TicketsService.getAdmins().
            subscribe(function (admins) {
            for (var admin in admins) {
                _this.admins.push(admins[admin].login);
            }
        });
    };
    AnswersComponent.prototype.answerStyle = function (author) {
        for (var _i = 0, _a = this.admins; _i < _a.length; _i++) {
            var admin = _a[_i];
            if (admin == author) {
                return 'blue';
            }
        }
        return 'green';
    };
    return AnswersComponent;
}());
AnswersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'answer',
        templateUrl: 'answers.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, tickets_service_1.TicketsService])
], AnswersComponent);
exports.AnswersComponent = AnswersComponent;
//# sourceMappingURL=answers.component.js.map