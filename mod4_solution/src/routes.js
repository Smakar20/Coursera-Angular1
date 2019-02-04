(function () {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuApp/templates/categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      categories: ['MenuDataService',  ((MenuDataService) => {
        return MenuDataService.getAllCategories();
      })]
    }
  })

  /*.state('items', {
    url: '/items',
    templateUrl: 'src/menuApp/templates/items.template.html',
    controller: 'ItemsController as items',
    resolve: {
      items: ['$stateParams', 'MenuDataService', (($stateParams, MenuDataService) => {
        return MenuDataService.getItemsForCategory($stateParams.id);
      })]
    }
  });*/

}

})();
