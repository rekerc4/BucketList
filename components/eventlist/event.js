"use strict";

let event = {
    bindings: "",
    template: `
    <section class="eventList" ng-repeat="info in $ctrl.searchInfo track by $index">
        <img src="{{ info.images[0].url }}">
        <h1>Name: {{ info.name }}</h1>
        <p>Date: {{ info.dates.start.localDate }}</p>
        <p>Venue: {{ info._embedded.venues[0].name }}</p>
        <a href="{{info.url}}">View on Ticketmaster</a>
        <button class="favBtn" ng-click="$ctrl.favClick(info);"><i class="material-icons">star</i></button>
        <button ng-click="$ctrl.moreInfo($index);">More Information</button>

        <section class="modal" ng-if="$ctrl.show === $index">
            <img src="{{ info.images[0].url }}">
            <h1>Name: {{ info.name }}</h1>
            <p>Date: {{ info.dates.start.localDate }}</p>
            <p>Venue: {{ info._embedded.venues[0].name }}</p>
            <a href="{{info.url}}">View on Ticketmaster</a>
            <button class="favBtn" ng-click="$ctrl.favClick(info);"><i class="material-icons">star</i></button>
            <button ng-click="$ctrl.closeInfo();"><i class="material-icons">clear</i></button>
        </section>
    </section>
    `,
    controller: ["TicketService", function (TicketService) {
    const vm = this;
    vm.show = null;
    vm.searchInfo = TicketService.getObject();
    vm.favClick = (index) => {
    TicketService.bucketlist.push(index);
    }
    vm.moreInfo = (index) => {
        vm.show = index;
    }
    vm.closeInfo = () => {
        vm.show = null;
    }

    }]
    
}

angular
    .module("app")
    .component("event", event);