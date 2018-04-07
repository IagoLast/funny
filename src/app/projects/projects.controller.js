(function () {
  'use strict';

  angular
    .module('desktop')
    .controller('ProjectsController', ProjectsController);

  function ProjectsController($rootScope, $timeout, $window) {
    var vm = this;


    vm.unregisterFn = $rootScope.$on("$routeChangeSuccess", function () {
      $window.scroll(0, 0);
    });

    vm.timer = $timeout(function () {
      $rootScope.mainClass = 'fade';
    }, 1000);

    $rootScope.$on('$destroy', function () {
      $timeout.cancel(vm.timer);
      vm.unregisterFn();
    });

    vm.projects = [
      {
        title: 'Samsung',
        subtitle: 'In-store customer experience ',
        img: 'assets/projects/samsung/1.png',
        thumb: 'assets/projects/samsung/thumb.png',
        link: '#/projects/samsung',
        year: 2017,
        class: 'samsung'
      },
      {
        title: 'Trebo',
        subtitle: 'Different way to check the weather ',
        img: 'assets/projects/trebo/1.png',
        thumb: 'assets/projects/trebo/thumb.png',
        link: '#/projects/trebo',
        year: 2017,
        class: 'wea'
      },
      {
        title: 'Camper',
        subtitle: 'Apps design',
        img: 'assets/projects/camper/1.png',
        thumb: 'assets/projects/camper/thumb.png',
        link: '#/projects/camper',
        year: 2018,
        class: 'camper'
      },

      {
        title: 'Vidahora',
        subtitle: 'Branding + web + app',
        img: 'assets/projects/vidahora/1.gif',
        thumb: 'assets/projects/vidahora/1.gif',
        link: '#/projects/vida-ahora',
        year: 2016,
        class: 'vab'
      },
      {
        title: 'Vigo timetravel',
        subtitle: 'App to visit the past and present',
        img: 'assets/projects/vigo-timetravel/1.png',
        thumb: 'assets/projects/vigo-timetravel/1.png',
        link: '#/projects/vigo-timetravel',
        year: 2015,
        class: 'vtt'
      },

      {
        title: 'E-aditivos',
        subtitle: 'Interactive list of food aditives',
        img: 'assets/projects/e-aditivos/1.png',
        thumb: 'assets/projects/e-aditivos/thumb.png',
        link: '#/projects/e-aditivos',
        year: 2015,
        class: 'adi'
      }, 
      {
        title: 'Editorial design handbook',
        subtitle: 'Beginner\'s guide to editorial design',
        img: 'assets/projects/manual/1.png',
        thumb: 'assets/projects/manual/1.png',
        link: '#/projects/manual',
        year: 2014,
        class: 'man'
      },
    ]
  }


})();
