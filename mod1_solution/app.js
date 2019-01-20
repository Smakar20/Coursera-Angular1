(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchChecker);

LunchChecker.$inject = ['$scope'];

function LunchChecker($scope){
  $scope.lunch_menu = '';
  $scope.message = '';
  $scope.inp_cls = 'black';
  $scope.msg_cls = 'msg_black';

  $scope.LunchCheck = function () {
    // checking for 'empty' item
    let items = $scope.lunch_menu.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).filter(Boolean);

    if (items.length === 0) {
      $scope.message = 'Please enter data first';
      $scope.inp_cls = 'red';
      $scope.msg_cls = 'msg_red';
      return;
    }

    $scope.message = (items.length <= 3) ? 'Enjoy!' : 'Too much!';
    $scope.inp_cls = 'green';
    $scope.msg_cls = 'msg_green';
  };
}
})();
