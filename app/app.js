var BonderaApp = angular.module('BonderaApp', ['ngRoute', 'bonderaControllers', 'bonderaFilters']);

BonderaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
    })

}]);