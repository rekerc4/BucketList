"use strict"; 

angular
  .module('app', ["ngRoute", "ngAnimate"])
  .config(function($routeProvider){
      $routeProvider
      .when("/search", {
          template: `<search-criteria></search-criteria>`
        })
        .when("/bucket", {
          template: `<bucketlist-page></bucketlist-page>`
        })
        .otherwise({ redirectTo: "/search" });
  }); 