"use strict"; 

angular
  .module('app', ["ngRoute", "ngAnimate"])
  .config(function($routeProvider){
      $routeProvider
      .when("/search", {
        template: ` <section class="container" id="container">
        <search-criteria></search-criteria></section>`
      })
      .when("/bucket", {
        template: ` <section class="container" id="container">
        <bucketlist-page></bucketlist-page></section>`
      })
      .when("/event", {
        template: ` <section class="container" id="container">
        <event></event></section>`
      })
      .otherwise({ redirectTo: "/search" });
  }); 
