"use strict"; 

let searchCriteria = {
    template: `
    <button ng-click="$ctrl.getData();">MAKE THE DATA LOAD</button>
    <event></event>
    `,
    controller: ["TicketService", function(TicketService) {
        const vm = this;
        vm.getData = () => {
            TicketService.requestData().then((response) => {
                console.log(response.data._embedded.events);
            });
        }
    }]
}

angular
    .module("app")
    .component("searchCriteria", searchCriteria); 
