angular.module("myApp");

app.controller("homeController", ["$scope", "allServices", function ($scope, allServices) {

    $scope.home = "Homing Device!";

    $scope.searchFunction = function (input) {
        allServices.get(input).then(function (response) {

        })
    }

}])
