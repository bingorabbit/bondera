var bonderaControllers = angular.module('bonderaControllers', []);

bonderaControllers.controller('MainCtrl', function($scope){
    $scope.calculateFare = function(){
        $scope.distanceError = ($scope.fareForm.$submitted || $scope.fareForm.distance.$touched) && $scope.fareForm.distance.$error.required
        $scope.timeIntervalError = ($scope.fareForm.$submitted || $scope.fareForm.timeInterval.$touched) && $scope.fareForm.timeInterval.$error.required
    }
});