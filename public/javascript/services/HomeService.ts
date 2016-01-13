"use strict";
namespace app.Services {
  export class HomeService {

    public BookResource;

    public getAll() {
      return this.BookResource.query();
    };

    constructor(private $resource: ng.Resource.IResourceService) {
      this.BookResource = $resource("/books");
    }
  }

  angular.module('app').service('HomeService', HomeService);
}
