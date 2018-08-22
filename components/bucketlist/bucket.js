"use strict"; 

const bucketlistPage = {
    template:`
    <ul>
        <li ng-repeat="event in $ctrl.list track by $index">
        {{event.name}} // {{event.promoter}} // {{event.date}} // {{event.venue}}
        <button ng-click="$ctrl.delete($index);">X</button>
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