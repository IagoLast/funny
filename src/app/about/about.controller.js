(function() {
    'use strict';

    angular
        .module('desktop')
        .controller('AboutController', AboutController);

    function AboutController($rootScope, $timeout) {
        $timeout(function() {
            $rootScope.mainClass = 'fade';
        }, 1000);
    }

})();
