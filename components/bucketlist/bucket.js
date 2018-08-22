"use strict"; 

const bucketlistPage = {
    templateUrl: 'components/bucketlist/bucket.html',
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

