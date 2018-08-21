"use strict"; 

module('app', ["ngRoute", "ngAnimate"]).config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: `<search></search><event></event>`
      })
      .when("/bucket", {
        template: `<bucket></bucket>`
      })
      .otherwise({ redirectTo: "/home" });
}); 