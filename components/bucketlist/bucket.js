"use strict"; 

const bucketlistPage = {
    template:`
    <ul>
        <li ng-repeat="info in $ctrl.list track by $index">
        <img src="{{info.images[0].url}}">
        <section>
        {{info.name}} {{info.dates.start.localDate}} {{info._embedded.venues[0].name}} <a href="{{info.url}}">View on Ticketmaster</a>
        </section>
        <button ng-click="$ctrl.delete($index);"><i class="material-icons">close</i></button>
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
        </li>
    </ul>
    `,
    controller: ["TicketService", function(TicketService) {
        const vm = this;
        vm.list = TicketService.bucketlist;
        vm.delete = (index) => {
            vm.list.splice(index, 1);
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
    .component("bucketlistPage", bucketlistPage); 

