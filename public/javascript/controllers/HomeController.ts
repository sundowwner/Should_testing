'use strict';
namespace app.Controllers {
  export class HomeController {

    public books;
    public book;

    public update()    {

    }
    public delete() {
        this.HomeService.deleteBook( this.$routeParams["id"]).then((res) => {
            this.$location.path("/");
        });
    }

    constructor(private HomeService: app.Services.HomeService,
                private $location: ng.ILocationService,
                private $routeParams: ng.route.IRouteParamsService

    ) {
      this.books = HomeService.getAll();
      this.book = HomeService.getBook($routeParams["id"]);
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
