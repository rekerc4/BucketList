"use strict"; 

const bucketlistPage = {
    template:`
    <ul>
        <li ng-repeat="event in $ctrl.list">{{event.name}} // {{event.date}}</li>
    </ul>
    `,
    controller: ["TicketService", function(TicketService) {
        const vm = this;
        vm.list = TicketService.bucketlist;
    }]
}

angular
    .module("app")
    .component("bucketlistPage", bucketlistPage); 