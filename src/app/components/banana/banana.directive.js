(function() {
  'use strict';

  angular
    .module('desktop')
    .directive('myBanana', {
      templateUrl: 'app/components/banana/banana.html',
      scope: {
        src: '=',
        animationClass: '='
      },
      link: link
    });

    function link(){

    }
})();
