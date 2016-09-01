var homeModule = angular.module('HOME', ['ngRoute','Main']);

homeModule.config(function ($routeProvider) {

    $routeProvider
    .when('/home', {
        controller: 'HomeController',
        templateUrl:'/Views/MainDiv/MainBody.html'
    })
    .when('/main', {
        controller: 'MainController',
        templateUrl: '/Views/Main/Main.html'
    })

    .otherwise({
        redirectTo: '/home'
    });
});