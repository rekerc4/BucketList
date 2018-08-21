"use strict";

let event = {
    template: `<section>
  <h1>Name: {{ $ctrl.getInfo.events.name }}</h1>
  <p>Promoter: {{ $ctrl.info.events.promoter }}</p>
  <p>Start Date: {{ $ctrl.info.events.dates.start.localDate }}</p>
  <p>Location: {{ $ctrl.info.events.dates.start.locale }}</p>
  <a href="$ctrl.info.events.url">View on Ticketmaster</a>
  <button>Favorite</button>
  </section>`,
    controller: ["TicketService", function (TicketService) {
    const vm = this;
    vm.getInfo = TicketService.requestData().then((response) => {
        // console.log(vm.getInfo)
    return response.data._embedded.events;
    });
    console.log(vm.getInfo)
    }
    ]
}

angular
    .module("app")
    .component("event", event);