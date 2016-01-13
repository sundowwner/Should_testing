'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        this.books = HomeService.getAll();
        constructor(private, HomeService, app.Services.HomeService);
        {
            this.books = HomeService.getAll();
        }
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
angular.module('app').controller('HomeController', HomeController);
