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
      .when("/event", {
        template: `<event></event>`
      })
      .otherwise({ redirectTo: "/search" });
  }); 
