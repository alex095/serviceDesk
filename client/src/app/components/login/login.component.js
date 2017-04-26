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
var LoginComponent = (function () {
    function LoginComponent(ticketsService, router) {
        this.ticketsService = ticketsService;
        this.router = router;
        this.isadmin = false;
    }
    LoginComponent.prototype.logIn = function () {
        var logData = {
            login: this.login,
            pwd: this.pwd
        };
        if (this.isadmin) {
            this.adminLogin(logData);
        }
        else {
            this.userLogin(logData);
        }
    };
    LoginComponent.prototype.userLogin = function (logData) {
        var _this = this;
        this.ticketsService.logIn(logData).subscribe(function (res) {
            if (!res || _this.pwd === undefined) {
                _this.error = 'Invalid login or password';
                return;
            }
            else {
                _this.router.navigate(['/tickets/', _this.login]);
            }
        });
    };
    LoginComponent.prototype.adminLogin = function (logData) {
        var _this = this;
        this.ticketsService.logInAdm(logData).subscribe(function (res) {
            if (!res || _this.pwd === undefined) {
                _this.error = 'Invalid login or password';
                return;
            }
            else {
                console.log(res);
                _this.router.navigate(['/admtickets/', res.login, res.queue, 'opened']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'log-in',
        templateUrl: 'login.component.html',
    }),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map