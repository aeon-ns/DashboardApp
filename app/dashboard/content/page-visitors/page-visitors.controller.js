(function () {

    function PageVisitorsController($scope) {
        var myChart = document.getElementById('myChart');
        var ctx = myChart.getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                title: 'Page Views',
                labels: ['Item 1', 'Item 2', 'Item 3'],
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: '#4100CE'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            // display: false
                        },
                        barThickness: 0,
                        position: 'right'
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                },
                responsive: true,
                backgroundColor: 'white',
                maintainAspectRatio: true,
                legend: {
                    display:false
                }
            }
        });
    }

    PageVisitorsController.$inject = ['$scope'];

    angular.module('app')
        .controller('PageVisitorsController', PageVisitorsController);

})();