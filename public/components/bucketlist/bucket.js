"use strict"; 

const bucketlistPage = {

    templateUrl: "components/bucketlist/bucket.html",
    controller: ["TicketService", "$location", function(TicketService, $location) {
        const vm = this;
        vm.list = TicketService.bucketlist;
        vm.delete = (index) => {//delete item from bucketlist.
            vm.list.splice(index, 1);
        }
        vm.moreInfo = (index) => {//show modal for selected item using ng-if. 
            vm.show = index;
        }
        vm.closeInfo = () => {//close modal. 
            vm.show = null;
        }
        vm.changePath = (path) => {//change path to selected path.
            $location.path(path);
        }
    }]
}

angular
    .module("app")
    .component("bucketlistPage", bucketlistPage); 

