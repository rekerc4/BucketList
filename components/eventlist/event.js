"use strict";

let event = {
    bindings: "",
    template: `<section class="eventList" ng-repeat="info in $ctrl.searchInfo track by $index">
  <h1>Name: {{ $ctrl.info.events.name }}</h1>
  <p>Promoter: {{ $ctrl.info.events.promoter }}</p>
  <p>Location: {{ $ctrl.info.events.locale }}</p>
  <img src="{{ $ctrl.info.events.images[0].url }}"
  <a href="$ctrl.info.events.url">View on Ticketmaster</a>
  <button class="favBtn" ng-click="$ctrl.favClick();">Favorite</button>
  </section>`,
    controller: ["TicketService", function (TicketService) {
    const vm = this;
    vm.searchInfo = TicketService.getObjec();
    vm.favClick = () => {
    TicketService.bucketlist.push(index);
    }
    }
    ]
}

angular
    .module("app")
    .component("event", event);