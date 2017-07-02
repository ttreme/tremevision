var app = angular.module("myApp",["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "/components/home/home.html",
            controller: "homeController"
        })
        .when("/favorites",{
            templateUrl: "/components/favorites/favorites.html",
            controller: "favoritesController"
    })
        .otherwise({
            redirectTo: "/home"
        });

}])