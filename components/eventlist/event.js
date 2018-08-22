"use strict";

let event = {
    bindings: "",
    templateUrl: 'components/eventlist/event.html',
    controller: ["TicketService", function (TicketService) {
    const vm = this;
    vm.searchInfo = TicketService.getObject();
    vm.favClick = (index) => {
    TicketService.bucketlist.push(index);
    }
    }
    ]
}

angular
    .module("app")
    .component("event", event);