'use strict';
namespace app.Controllers {
    export class HomeController {

        public books;

        public showModal(animalName: string) {
            this.$uibModal.open({
                templateUrl: "/templates/dialog.html",
                controller: "DialogController",
                controllerAs: "modal",
                resolve: {
                    animalName:() => animalName
                },
                size: "sm"
            });
        }
        public delete(id) {
            this.HomeService.deleteBook(id).then((res) => {
                this.$location.path("/");
            });
        }

        constructor(private HomeService: app.Services.HomeService,
            private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService,
            private $uibModal: angular.ui.bootstrap.IModalService

            ) {
            this.books = HomeService.getAll();
        }



    }
    class DialogController {
        public ok() {
            this.$modalInstance.close();
        }

        constructor(public animalName: string, private $modalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
    }




    angular.module("app").controller("DialogController",DialogController);
    angular.module('app').controller('HomeController', HomeController);
}
