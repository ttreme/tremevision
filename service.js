var app = angular.module("myApp");

app.service("allServices", ["$scope", "$http", function ($scope, $http) {

    $scope.get = function (input) {

        $http.get("").then(function (response) {
            
        });
    }
}])
