(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['menuItems'];
    function ItemsController(menuItems) {
      var itemCtrl = this; 
      itemCtrl.list = menuItems.menu_items;
    }   
})();