"use strict";
namespace app.Controllers {
  export class BookUpdateController {
    public book;

    public update(id) {
      this.HomeService.updateBook(id).then((res) => {
        this.$location.path("/");
      });
    }

    constructor(private HomeService: app.Services.HomeService, private $location: ng.ILocationService, private $routeParams: ng.route.IRouteParamsService) {

      this.book = HomeService.getBook($routeParams["id"]);

    };
  }
  angular.module('app').controller("BookUpdateController", BookUpdateController);
}
