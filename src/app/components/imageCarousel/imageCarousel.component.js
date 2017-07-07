(function() {
  'use strict';

  angular
    .module('desktop')
    .component('imageCarousel', {
      templateUrl: 'app/components/imageCarousel/imageCarousel.html',
      controller: ImageCarousel,
      controllerAs: 'vm',
      bindings: {
        images: '=',
        source: '='
      }
    });

  /** @ngInject */
  function ImageCarousel() {
    var vm = this;
    vm.visible = 0;
  }
})();
