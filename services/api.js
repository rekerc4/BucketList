"use strict";

function TicketService($http) {
    let vm = this;
    vm.requestData = () => {
        return $http({
        method: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=U7tG9w7O8UpfeSNk3oaR43EUFk1rMyoA"
        });
    };
}


angular
    .module("app")
    .service("TicketService", TicketService);