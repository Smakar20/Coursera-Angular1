(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var itemsToBuy = this;
  itemsToBuy.toBuy = ShoppingListCheckOffService.toBuy;
  itemsToBuy.moveToBought = function (idx){
    ShoppingListCheckOffService.alreadyBought(idx);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var itemsAlreadyBought = this;
  itemsAlreadyBought.bought = ShoppingListCheckOffService.bought;
}

function ShoppingListCheckOffService(){
  var service = this;
  service.toBuy = [
   {
      name: 'cookies',
      quantity: 10
   },
   {
     name: 'cupcakes',
     quantity: 15
   },
   {
     name: 'bananas',
     quantity: 12
   },
   {
     name: 'apples',
     quantity: 5
   },
   {
     name: 'chocolates',
     quantity: 20
   }
  ];
  service.bought = [];

  service.alreadyBought = function (idx){
    var newlyBought = service.toBuy[idx];
    service.toBuy.splice(idx,1);
    service.bought.push(newlyBought);
  }
}
})();
