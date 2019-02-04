(function () {
    'use strict';
    
    angular.module('data')
    .component('myItems', {
      templateUrl: 'src/menuApp/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();
    