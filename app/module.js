"use strict"; 

angular
.module('app', ["ngRoute", "ngAnimate"]).config(function($routeProvider){
    $routeProvider
    .when("/", {
        template: `<search></search><event></event>`
      })
      .when("/bucket", {
        template: `<bucket></bucket>`
      })
      .otherwise({ redirectTo: "/home" });
}); 