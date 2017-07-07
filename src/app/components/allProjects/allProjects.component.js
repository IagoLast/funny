(function() {
  'use strict';

  angular
    .module('desktop')
    .component('allProjects', {
      templateUrl: 'app/components/allProjects/allProjects.html',
      controller: AllProjectsController,
      controllerAs: 'vm',
      bindings: {
        projects: '='
      }
    });

  /** @ngInject */
  function AllProjectsController() {}
})();
