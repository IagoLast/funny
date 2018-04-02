(function() {
  'use strict';

  angular
    .module('desktop')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'vm'
      })
      .when('/projects/e-aditivos', {
        templateUrl: 'app/projects/e-aditivos.html'
      })
      .when('/projects/hearty', {
        templateUrl: 'app/projects/hearty.html'
      })
      .when('/projects/huarte', {
        templateUrl: 'app/projects/huarte.html'
      })
      .when('/projects/manual', {
        templateUrl: 'app/projects/manual.html'
      })
      .when('/projects/vida-ahora-branding', {
        templateUrl: 'app/projects/vida-ahora-branding.html'
      })
      .when('/projects/vida-ahora-webapp', {
        templateUrl: 'app/projects/vida-ahora-webapp.html'
      })
      .when('/projects/vigo-timetravel', {
        templateUrl: 'app/projects/vigo-timetravel.html'
      })
      .when('/projects/iberia', {
        templateUrl: 'app/projects/iberia.html'
      })
      .when('/projects/camper', {
        templateUrl: 'app/projects/camper.html'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })

    .otherwise({
      redirectTo: '/'
    });
  }

})();
