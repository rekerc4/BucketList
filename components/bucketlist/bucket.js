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
        </li>
    </ul>
    `,
    controller: ["TicketService", function(TicketService) {
        const vm = this;
        vm.list = TicketService.bucketlist;
        vm.delete = (index) => {
            vm.list.splice(index, 1);
        }
    }]
}

angular
    .module("app")
    .component("bucketlistPage", bucketlistPage); 

