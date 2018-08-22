"use strict";

function TicketService($http, ) {
    let vm = this;
    vm.requestData = (inter, city, fdat, ldat) => {
        let interUri = "";
        let cityUri = "";
        let objec = null; 
        function pad(number) {
            if (number < 10) {
              return '0' + number;
            }
            return number;
          }
      
          Date.prototype.toISOString = function() {
            return this.getUTCFullYear() +
              '-' + pad(this.getUTCMonth() + 1) +
              '-' + pad(this.getUTCDate()) +
              'T' + pad(this.getUTCHours()) +
              ':' + pad(this.getUTCMinutes()) +
              ':' + pad(this.getUTCSeconds()) +
              'Z';
          };

        let nfdat = fdat.toISOString();
        let nldat = encodeURIComponent(ldat.toISOString());
        if(typeof inter === "string" && typeof city === "string"){
            interUri = encodeURIComponent(inter);
            cityUri = encodeURIComponent(city);
        }
        else{
            return;
        }
        return $http({
        method: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${interUri}&city=${cityUri}&startDateTime=${nfdat}&endDateTime=${nldat}&apikey=U7tG9w7O8UpfeSNk3oaR43EUFk1rMyoA`
        }).then((response) => {
            vm.objec = response.data;
            console.log(vm.objec._embedded.events);
            //$location.path();
            return vm.objec;
        });
    };
    vm.bucketlist = [];
    vm.updateObject = (obj) => {
        vm.objec = obj;
    }
    vm.getObject = () => {
        return vm.objec._embedded.events;
    }
}


angular
    .module("app")
    .service("TicketService", TicketService);