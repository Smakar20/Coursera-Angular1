(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('baseUrl', 'https://davids-restaurant.herokuapp.com');

MenuDataService.$inject = ['$http', 'baseUrl'];
function MenuDataService() {
    var service = this;

    service.getAllCategories = (($http, baseUrl) => {
        console.log('in service here')
        return $http({url: baseUrl + '/categories.json'})
        .then((result) => {
            console.log('in service: ', result)
            return result.data;
        })
        .catch((err) => {
            console.log('in service: ', err)
            return err;
        });
    });

    /*service.getItemsForCategory = ((categoryShortName) => {
        return $http({url: baseUrl + '/menu_items.json?category=' + categoryShortName})
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })
    });*/
}
})();