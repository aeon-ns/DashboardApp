(function () {

    function SideMenuController($scope) {
        $scope.menu = {
            activeItem: 'Dashboard'
        };
        $scope.menu.items = [
            {
                listIcon: 'dashboard',
                title: 'Dashboard',
                listActionIcon: 'arrow_drop_down',
                subMenuItems: [
                    { title: 'Page Visitors' },
                    { title: 'Post Performance' },
                    { title: 'Team Overall' },
                ]
            },
            {
                listIcon: 'calendar_today',
                title: 'Calendar'
            },
            {
                listIcon: 'inbox',
                title: 'Inbox',
                listActionIcon: 'unfold_more'
            },
            {
                listIcon: 'money',
                title: 'Invoicing'
            },
            {
                listIcon: 'report',
                title: 'Lab / Experimental'
            }
        ];
        $scope.onMenuItemClick = function (item) {
            $scope.menu.activeItem = item;
        };
    }

    SideMenuController.$inject = ['$scope'];

    angular.module('app')
        .controller('SideMenuController', SideMenuController);

})();