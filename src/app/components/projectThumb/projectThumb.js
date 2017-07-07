(function() {
  'use strict';

  angular
    .module('desktop')
    .component('projectThumb', {
      templateUrl: 'app/components/projectThumb/projectThumb.html',
      bindings: {
        project: '='
      },
      controllerAs: 'vm'
    });
})();
