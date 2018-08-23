"use strict";

let event = {
    bindings: "",
    templateUrl: "components/eventlist/event.html",
    controller: ["TicketService", function (TicketService) {
        const vm = this;
        vm.show = null;
        vm.searchInfo = TicketService.getObject();
        vm.favClick = (index) => {
            TicketService.bucketlist.push(index);
        }
        vm.moreInfo = (index) => {
            vm.show = index;
            console.log(vm.show)
        }
        vm.closeInfo = () => {
            vm.show = null;
        }

    }]

}

angular
    .module("app")
    .component("event", event);