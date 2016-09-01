homeModule.controller('HomeController', ['$scope','$location', function ($scope,$location) {
    $scope.name = "praveen";
    $scope.startGame = function () {
        $location.path('/main');
    };
}]);