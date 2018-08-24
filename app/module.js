"use strict"; 

angular
  .module('app', ["ngRoute", "ngAnimate"])
  .config(function($routeProvider){
      $routeProvider
      .when("/search", {
        template: ` <section class="backgroundGradient" id="backgroundGradient"></section>
        <search-criteria></search-criteria>`
      })
      .when("/bucket", {
        template: ` <section class="backgroundGradient" id="backgroundGradient"></section>
        <bucketlist-page></bucketlist-page>`
      })
      .when("/event", {
        template: ` <section class="backgroundGradient" id="backgroundGradient"></section>
        <event-list></event-list>`
      })
      .otherwise({ redirectTo: "/search" });
  }); 
