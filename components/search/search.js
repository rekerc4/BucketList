"use strict"; 

let searchCriteria = {
    templateUrl: 'components/search/search.html',
    controller: ["TicketService", "$scope", function(TicketService, $scope) { 
        const vm = this;
        vm.data = null;
        vm.fdate = {
            value: new Date(2018, 8, 7)
        }
        vm.ldate = {
            value: new Date(2018, 9, 7)
        }
        vm.getData = (interest, city, fdate, ldate) => {
            TicketService.requestData(interest, city, fdate, ldate)
        }
    }]
}
angular
    .module("app")
    .component("searchCriteria", searchCriteria); 
