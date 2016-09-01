var mainModule = angular.module('Main', ['ngRoute']);

mainModule.config(function ($routeProvider) {

    $routeProvider
    .when('/main', {
        controller: 'MainController',
        templateUrl: '/Views/Main/Main.html'
    })

    .otherwise({
        redirectTo: '/main'
    });
});
