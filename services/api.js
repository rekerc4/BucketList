"use strict";

function TicketService($http, ) {
    let vm = this;
    vm.requestData = (inter, city, fdat, ldat) => {
        console.log(fdat, ldat);
        console.log(inter + " " + city + " " + fdat + " " + ldat);
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
              '.' + (this.getUTCMilliseconds() / 1000).toFixed(2).slice(2, 5) +
              'Z';
          };
        let nfdat = fdat.toISOString().replace(/["."]+/g, ':');
        console.log(nfdat); 
        let nldat = encodeURIComponent(ldat.toISOString());  
        console.log(fdat.toISOString());
        if(typeof inter === "string" && typeof city === "string"){
            interUri = encodeURIComponent(inter);
            cityUri = encodeURIComponent(city);
           console.log(cityUri);
        }
        else{
            console.log('error'); 
            return;
        }
 
      vm.bucketlist = [
        {
        name: "Concert",
        date: "8-22"
        },
        {
        name: "Football Game",
        date: "9-03"
        }];
      
        return $http({
        method: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${interUri}&city=${cityUri}&apikey=U7tG9w7O8UpfeSNk3oaR43EUFk1rMyoA`
        }).then((response) => {
            objec = response.data;
            console.log(objec._embedded.events);
            //$location.path();
            return objec;
        });
    };
    vm.updateObject = (obj) => {
        objec = obj;
    }
    vm.getObject = () => {
        return objec;
    }
}


angular
    .module("app")
    .service("TicketService", TicketService);