"use strict";

let event = {
    bindings: "",
    template: `<section class="eventList" ng-repeat="info in $ctrl.searchInfo track by $index">
    <img src="{{info.images[0].url}}">
  <h1>Name: {{ info.name }}</h1>
  <p>Date: {{ info.dates.start.localDate }}</p>
  <p>Venue: {{ info._embedded.venues[0].name }}</p>
  <a href="{{info.url}}">View on Ticketmaster</a>
  <button class="favBtn" ng-click="$ctrl.favClick(info);">Favorite</button>
  </section>`,
    controller: ["TicketService", function (TicketService) {
    const vm = this;
    vm.searchInfo = TicketService.getObject();
    console.log(vm.searchInfo);
    vm.favClick = (index) => {
    TicketService.bucketlist.push(index);
    console.log(TicketService.bucketlist);
    }
    }
    ]
}

angular
    .module("app")
    .component("event", event);