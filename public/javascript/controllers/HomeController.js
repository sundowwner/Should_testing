'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(HomeService, $location, $routeParams) {
                this.HomeService = HomeService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.books = HomeService.getAll();
                this.book = HomeService.getBook($routeParams["id"]);
            }
            HomeController.prototype.update = function () {
            };
            HomeController.prototype.delete = function () {
                var _this = this;
                this.HomeService.deleteBook(this.$routeParams["id"]).then(function (res) {
                    _this.$location.path("/");
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
