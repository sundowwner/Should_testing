"use strict";
namespace app.Controllers{
    export class BooksCreateController{
        public book = {};

        public createBook(){
            this.HomeService.saveBook(this.book).then((res)=>{
                this.$location.path('/')
            })
        }

        constructor(
            private HomeService: app.Services.HomeService,
            private $location: ng.ILocationService
        ){}
    }
    angular.module('app').controller('BooksCreateController', BooksCreateController);
}
