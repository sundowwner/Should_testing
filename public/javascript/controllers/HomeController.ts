'use strict';
namespace app.Controllers {
  export class HomeController {

    public books;

    constructor(private HomeService: app.Services.HomeService) {
      this.books = HomeService.getAll();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
