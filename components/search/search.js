"use strict"; 

let searchCriteria = {
    templateUrl: 'components/search/search.html',
    controller: ["TicketService", "$scope", function(TicketService, $scope) { 
        const vm = this;
        vm.data = null;
        vm.fdate = {
            value: new Date(2018, 8, 7)
        }
        console.log(vm.fdate)
        vm.ldate = {
            value: new Date(2018, 9, 7)
        }
        vm.getData = (interest, city, fdate, ldate) => {
            console.log(vm.fdate.value.toISOString());
            TicketService.requestData(interest, city, fdate, ldate)
        }
    }]
}
angular
    .module("app")
    .component("searchCriteria", searchCriteria); 
