(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('myCategories', {
      templateUrl: 'src/menuApp/templates/mycategories.template.html',
      bindings: {
        categories: '<'
      }
    });
    
    })();
    