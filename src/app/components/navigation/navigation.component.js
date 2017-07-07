(function() {
  'use strict';

  angular
    .module('desktop')
    .component('navigationMenu', {
      templateUrl: 'app/components/navigation/navigation.html',
      controller: NavigationController
    });

  /** @ngInject */
  function NavigationController($scope, $location) {
    $scope.isActive = function(path) {
      return ($location.path() === path) ? 'active' : '';
    }
  }
})();
