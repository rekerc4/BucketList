"use strict"; 

angular
  .module('app', ["ngRoute", "ngAnimate"])
  .config(function($routeProvider){
      $routeProvider
      .when("/search", {
        template: ` <section class="container" id="container"></section>
        <search-criteria></search-criteria>`
      })
      .when("/bucket", {
        template: ` <section class="container" id="container"></section>
        <bucketlist-page></bucketlist-page>`
      })
      .when("/event", {
        template: ` <section class="container" id="container"></section>
        <event></event>`
      })
      .otherwise({ redirectTo: "/search" });
  }); 
