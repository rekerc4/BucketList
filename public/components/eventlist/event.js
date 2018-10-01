"use strict";

let eventList = {
    bindings: "",
    templateUrl: "components/eventlist/event.html",
    controller: ["TicketService", "$location", function (TicketService, $location) {
        const vm = this;
        vm.show = null;
        vm.searchInfo = TicketService.getObject();
        vm.favClick = (index) => {
            TicketService.bucketlist.push(index);//add an event to bucket list. 
        }
        vm.moreInfo = (index) => {//use ng-if value to show specific modal for the item selected
            vm.show = index;
        }
        vm.closeInfo = () => {//close modal by having angular remove it from the DOM when modal is closes
            vm.show = null;
        }
        vm.changePath = (path) => {//change path to either search or bucketlist.
            $location.path(path);
        }

    }]

}

angular
    .module("app")
    .component("eventList", eventList);