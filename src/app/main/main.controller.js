(function () {
  'use strict';

  angular
    .module('desktop')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window, $location, $scope, $rootScope, $timeout) {


    $timeout(function () {
      $rootScope.mainClass = 'slide-up';
    }, 1000);
    $window.addEventListener('wheel', _onWheel);
    $window.addEventListener("touchmove", _onWheel);

    var b1 = angular.element($window.document.querySelector('.b1 .bot'));
    var b2 = angular.element($window.document.querySelector('.b2 img'));
    var b3 = angular.element($window.document.querySelector('.b3 img'));

    animateBanana(b1);
    animateBanana(b2);
    animateBanana(b3);

    $timeout(function () {
      var parent = angular.element(b2.parent());
      parent.addClass('animate');
      $timeout(function () {
        parent.removeClass('animate');
      }, 2000);
    }, 2000);

    $timeout(function () {
      var parent = angular.element(b3.parent());
      parent.addClass('animate');
      $timeout(function () {
        parent.removeClass('animate');
      }, 2000);
    }, 6000);

    $timeout(function () {
      var parent = angular.element(b1.parent());
      parent.addClass('animate');
    }, 9000);


    function _onWheel(e) {
      $scope.$evalAsync(function () {
        if (e.deltaY > 0) {
          $window.removeEventListener('wheel', _onWheel);
          $location.path('/projects');
        }
      });
    }

    function animateBanana(banana) {
      banana.on('click', function () {
        var parent = angular.element(banana.parent());
        parent.addClass('animate');
        $timeout(function () {
          parent.removeClass('animate');
        }, 1000);
      });
    }
  }


})();
