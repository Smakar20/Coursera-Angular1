(function (){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
    var categoriesList = this;
    categoriesList.categories = categories;
    console.log('in controller: ', categoriesList.categories)
}
})();