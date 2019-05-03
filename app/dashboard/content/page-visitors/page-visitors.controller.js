(function () {

    function PageVisitorsController($scope) {

        let days = [];
        let views = [];
        for (let i = 0; i < 30; i++) {
            days[i] = i + 1;
            views[i] = Math.floor(1000 + Math.random() * 9000);
        }

        let myChartElement = document.getElementById('myChart');
        let ctx = myChartElement.getContext('2d');

        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                title: 'Page Views',
                labels: days,
                datasets: [{
                    data: views,
                    backgroundColor: '#4100CE'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function (value, index, values) {
                                if (value < 1000) {
                                    return value;
                                }
                                if (value < 1000000) {
                                    return (value / 1000) + 'K';
                                }
                                return (value/1000000)+ 'M';
                            }
                        }, 
                        position: 'right',
                        gridLines: {
                            drawBorder: false
                        }
                    }],
                    xAxes: [{
                        maxBarThickness: 18,
                        gridLines: {
                            display: false
                        }
                    }],
                },
                responsive: true,
                backgroundColor: 'white',
                maintainAspectRatio: true,
                legend: {
                    display: false
                },
                curvature: 1,
            }
        });
    }

    PageVisitorsController.$inject = ['$scope'];

    angular.module('app')
        .controller('PageVisitorsController', PageVisitorsController);

})();