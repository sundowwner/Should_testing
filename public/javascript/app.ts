'use strict';
namespace App {
    angular.module('app', ['ngRoute', 'ngResource'])
        .config((
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider,
        $httpProvider: ng.IHttpProvider) => {


    $routeProvider.when('/', {
      templateUrl: '/templates/Home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    })
    .when('/booksCreate', {
      templateUrl: '/templates/booksCreate.html',
      controller: app.Controllers.BooksCreateController,
      controllerAs: 'vm'
    })
    .when('/booksUpdate', {
      templateUrl: '/templates/bookUpdate.html',
      controller: app.Controllers.BookUpdateController,
      controllerAs: 'vm'
    })
    .otherwise({ redirectTo: '/' });


        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('HTTPFactory');
    });
}
