(function () {
  'use strict';
  
  angular.module('data')
  .component('categoryList', {
    templateUrl: 'src/menuApp/templates/category-list.template.html',
    bindings: {
      category: '<'
    }
  }); 
})();