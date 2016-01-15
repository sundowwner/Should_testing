'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(HomeService, $location, $routeParams, $uibModal) {
                this.HomeService = HomeService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.$uibModal = $uibModal;
                this.books = HomeService.getAll();
            }
            HomeController.prototype.showModal = function (animalName) {
                this.$uibModal.open({
                    templateUrl: "/templates/dialog.html",
                    controller: "DialogController",
                    controllerAs: "modal",
                    resolve: {
                        animalName: function () { return animalName; }
                    },
                    size: "sm"
                });
            };
            HomeController.prototype.delete = function (id) {
                var _this = this;
                this.HomeService.deleteBook(id).then(function (res) {
                    _this.$location.path("/");
                });
            };
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var DialogController = (function () {
            function DialogController(animalName, $modalInstance) {
                this.animalName = animalName;
                this.$modalInstance = $modalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$modalInstance.close();
            };
            return DialogController;
        })();
        angular.module("app").controller("DialogController", DialogController);
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
