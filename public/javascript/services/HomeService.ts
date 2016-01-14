"use strict";
namespace app.Services {
  export class HomeService {

    public BookResource;

    public getAll() {
      return this.BookResource.query();
    };

    public deleteBook(bookId){
        return this.BookResource.delete({_id:bookId}).$promise;
    }

    public getBook(bookId) {
      return this.BookResource.get({id:bookId});
    }

    public updateBook(book) {
      return this.BookResource.update(book).$promise;
    }

    public saveBook(book){
        return this.BookResource.save(book).$promise;
    };

    constructor(private $resource: ng.resource.IResourceService) {
      this.BookResource = $resource("/books");
    }
  }

  angular.module('app').service('HomeService', HomeService);
}
