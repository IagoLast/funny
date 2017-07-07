(function() {
    'use strict';

    angular
        .module('desktop')
        .config(config);

    function config($logProvider, $compileProvider) {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }

})();
