var bonderaControllers = angular.module('bonderaControllers', []);

bonderaControllers.controller('MainController', function($scope){
    $scope.fareReady = false;
    $scope.calculateFare = function(){
        $scope.distanceError = ($scope.fareForm.$submitted || $scope.fareForm.distance.$touched) && $scope.fareForm.distance.$error.required
        $scope.timeIntervalError = ($scope.fareForm.$submitted || $scope.fareForm.timeInterval.$touched) && $scope.fareForm.timeInterval.$error.required
        if ($scope.fareForm.distance.$dirty && $scope.fareForm.timeInterval.$dirty){
            $scope.fare = 3 + 1.40 * ($scope.distance - 1) + 0.28 * $scope.timeInterval
            $scope.fareReady = true;
        }
    }
});