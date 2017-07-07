(function() {
  'use strict';

  angular
    .module('desktop')
    .controller('ProjectsController', ProjectsController);

  function ProjectsController($rootScope, $timeout, $window) {
    var vm = this;


    vm.unregisterFn = $rootScope.$on("$routeChangeSuccess", function() {
      $window.scroll(0, 0);
    });

    vm.timer = $timeout(function() {
      $rootScope.mainClass = 'fade';
    }, 1000);

    $rootScope.$on('$destroy', function() {
      $timeout.cancel(vm.timer);
      vm.unregisterFn();
    });

    vm.projects = [{
      title: 'Weather App',
      subtitle: 'An honest, funny and different weather app',
      img: 'assets/projects/weather-app/1.png',
      link: '#/projects',
      year: 2016,
      class: 'wea'
    }, {
      title: 'Vidahora Branding',
      subtitle: 'Branding and full visual identity',
      img: 'assets/projects/vida-ahora-branding/thumb.png',
      link: '#/projects/vida-ahora-branding',
      year: 2016,
      class: 'vab'
    }, {
      title: 'Wellness Program',
      subtitle: 'App & Web',
      img: 'assets/projects/vida-ahora-webapp/1.png',
      link: '#/projects/vida-ahora-webapp',
      year: 2016,
      class: 'vaw'
    }, {
      title: 'Vigo timetravel',
      subtitle: 'App to visit the past and present',
      img: 'assets/projects/vigo-timetravel/1.png',
      link: '#/projects/vigo-timetravel',
      year: 2015,
      class: 'vtt'
    }, {
      title: 'Huarte International',
      subtitle: 'Law firm Visual Identity',
      img: 'assets/projects/huarte/1.png',
      link: '#/projects/huarte',
      year: 2015,
      class: 'hua'
    }, {
      title: 'E-aditivos',
      subtitle: 'Interactive list of food aditives',
      img: 'assets/projects/e-aditivos/1.png',
      link: '#/projects/e-aditivos',
      year: 2015,
      class: 'adi'
    }, {
      title: 'Iberia Express',
      subtitle: 'Ilustration for inflight magazine',
      img: 'assets/projects/iberia/1.png',
      link: '#/projects/iberia',
      year: 2015,
      class: 'ibe'
    }, {
      title: 'Hearthy m-health',
      subtitle: 'm-Health system',
      img: 'assets/projects/hearty/1.png',
      link: '#/projects/hearty',
      year: 2014,
      class: 'hea'
    }, {
      title: 'Editorial design handbook',
      subtitle: 'Beginner\'s guide to editorial design',
      img: 'assets/projects/manual/1.png',
      link: '#/projects/manual',
      year: 2014,
      class: 'man'
    }]
  }


})();
