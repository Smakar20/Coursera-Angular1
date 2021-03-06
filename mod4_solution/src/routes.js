(function () {
  'use strict';
  
  angular.module('MenuApp')
  .config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.otherwise('/');
  
    $stateProvider
  
    .state('home', {
      url: '/',
      templateUrl: 'src/menuApp/templates/home.template.html'
    })
    
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuApp/templates/category.template.html',
      controller: 'CategoriesController as categoryCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
  
    .state('itemDetail', {
      url: '/categories/{categoryShortName}',
      templateUrl: 'src/menuApp/templates/item.template.html',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        menuItems: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
              }]
      }
    });
  } 
})();