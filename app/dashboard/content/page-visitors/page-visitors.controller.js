(function () {

    function PageVisitorsController($scope, ChartService) {

        let days = [];
        let views = [];
        for (let i = 0; i < 30; i++) {
            days[i] = i + 1;
            views[i] = Math.floor(1000 + Math.random() * 9000);
        }
        ChartService.create(days, views);
    }

    PageVisitorsController.$inject = ['$scope', 'ChartService'];

    angular.module('app')
        .controller('PageVisitorsController', PageVisitorsController);

})();