var BonderaApp = angular.module('bonderaApp', ['ngRoute', 'bonderaControllers', 'bonderaFilters']);

BonderaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController'
    })

}]);