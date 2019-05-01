(function () {

    function run($log) {
        $log.debug('@run[loaded]');
    }

    run.$inject = ['$log'];

    angular.module('app').run(run);

});