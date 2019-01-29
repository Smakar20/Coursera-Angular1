(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItems)
.service('MenuSearchService', MenuSearchService);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItem: '<',
      emptyMsg: '<',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  }
  return ddo;
}

function ShoppingListDirectiveController() {
  var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchStr = '';
  var msg = 'Nothing found';
  list.emptyMsg = '';
  list.narrowDown = (() => {
    list.found = [];
    if (list.searchStr.trim() === '') {
      list.emptyMsg = msg;
    } else {
      MenuSearchService.getMatchedMenuItems(list.searchStr)
     .then((res) => {
       if (res.length === 0) {
         list.emptyMsg = msg;
         return;
       }
       list.emptyMsg = '';
       list.found = res;
     }, (err) => {
        console.log(err);
     });
    } 
  });

  list.remove = ((idx) => {
    list.found.splice(idx, 1);
  });
}

function MenuSearchService($http){
  var service = this;
  var foundItems = [];
  service.getMatchedMenuItems = ((searchTerm) => {
    return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json'})
    .then((result) => {
      for (var item of result.data.menu_items){
        if (item.description.indexOf(searchTerm) !== -1) foundItems.push(item);
      }
      return foundItems;
    })
    .catch((err) => {
      return err;
    });
  });
}
})();
