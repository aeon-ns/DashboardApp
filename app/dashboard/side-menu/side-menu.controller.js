(function () {

    function SideMenuController($scope) {
        $scope.menu = {
            items: [
                {
                    listIcon: 'dashboard',
                    title: 'Dashboard',
                    listActionIcon: 'arrow_drop_down',
                    subMenu: {
                        show: true,
                        items: [
                            { title: 'Page Visitors' },
                            { title: 'Post Performance' },
                            { title: 'Team Overall' },
                        ]
                    }
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
            ]
        };
        $scope.menu.activeItem = $scope.menu.items[0];
        $scope.menu.activeItem.subMenu.activeItem = $scope.menu.activeItem.subMenu.items[0];

        $scope.onMenuItemClick = function (item) {
            if ($scope.menu.activeItem.title != item.title) {
                if ($scope.menu.activeItem.subMenu) {
                    $scope.menu.activeItem.subMenu.show = false;
                    $scope.menu.activeItem.subMenu.activeItem = null;
                }
                if (item.subMenu) {
                    item.subMenu.show = true;
                }
                return $scope.menu.activeItem = item;
            }
            if ($scope.menu.activeItem.subMenu) {
                $scope.menu.activeItem.subMenu.show = !$scope.menu.activeItem.subMenu.show;
            }
        };

        $scope.onSubMenuItemClick = function (item, subItem) {
            item.subMenu.activeItem = subItem;
        };
    }

    SideMenuController.$inject = ['$scope'];

    angular.module('app')
        .controller('SideMenuController', SideMenuController);

})();