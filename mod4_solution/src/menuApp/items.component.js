(function () {
  'use strict';
  
  angular.module('data')
  .component('menuList', {
    templateUrl: 'src/menuApp/templates/itemlist.template.html',
    bindings: {
      items: '<',
        name:'<'
      
    }
  });  
  
})();