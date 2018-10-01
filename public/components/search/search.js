"use strict"; 

let searchCriteria = {
    templateUrl: 'components/search/search.html',
    controller: ["TicketService", "$scope", "$location", function(TicketService, $scope, $location) {//injecting TicketService, scope, and location. 
        const vm = this;
        vm.data = null;
        vm.fdate = {
            value: new Date(2018, 8, 7)//set initial beginnig date. 
        }
        vm.ldate = {
            value: new Date(2018, 9, 7)//set initial end date. 
        }
        vm.getData = (interest, city, fdate, ldate) => {
            TicketService.requestData(interest, city, fdate, ldate).then(()=> {
                $location.path("/event");
            });//change path when search entered and returns events.
        }
    }]
}
angular
    .module("app")
    .component("searchCriteria", searchCriteria); 
