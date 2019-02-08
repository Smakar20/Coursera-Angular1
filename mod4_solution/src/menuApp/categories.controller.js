(function () {
    'use strict';
    
    angular.module('data')
    .controller('CategoriesController', CategoriesController);
    
    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
      var categoryCtrl = this;
      categoryCtrl.categoryname = categories;
    }   
})();