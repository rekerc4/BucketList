"use strict"; 

angular
  .module('app', ["ngRoute", "ngAnimate"])
  .config(function($routeProvider){
      $routeProvider
      .when("/search", {
          template: `<search-criteria></search-criteria>`
        })
        .when("/bucket", {
          template: `<bucket></bucket>`
        })
        .otherwise({ redirectTo: "/search" });
  }); 