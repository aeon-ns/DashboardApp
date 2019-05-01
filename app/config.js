(function () {

    function config($logProvider, $stateProvider, $urlRouterProvider) {
        $logProvider.debugEnabled(true);

        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: "/dashboard",
                templateUrl: "app/dashboard/dashboard.view.html",
                // controller: 'DashboardController',
            })
            .state('dashboard.page-visitors', {
                url: '/page-visitors',
                views: {
                    'dashboard_content': {
                        templateUrl: "app/dashboard/content/page-visitors/page-visitors.view.html",
                        controller: "PageVisitorsController"
                    }
                }
            });

        $urlRouterProvider.otherwise('/dashboard/page-visitors');
    }

    angular.module('app').config(config);

})();