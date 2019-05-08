(function () {

    function ChartService($log, $filter) {

        var CHART_OPTIONS_COMMON = {
            chart: {
                type: 'column',
            },
            title: {
                align: 'center',
                style: {
                    color: '#333',
                    fontSize: '18px'
                }
            },
            colors: ['#1565D8', '#4100CE'],
            tooltip: {},
            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    marker: {
                        enabled: false
                    },
                    lineWidth: 0,
                    borderWidth: 0,
                    borderRadiusTopLeft: 2,
                    borderRadiusTopRight: 2,
                    groupPadding: 0.1,
                    maxPointWidth: 14,
                    pointPadding: 0.1
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                categories: [],
                lineColor: '#f3f3f3',
                minorTickLength: 3,
                tickLength: 6,
                tickColor: 'lightgrey',
                resize: {
                    enabled: true
                },
                width: '96%',
                labels: {
                    style: {
                        color: 'gray'
                    }
                },
                title: {
                    enabled: false,
                    style: {
                        color: '#333'
                    }
                },
                crosshair: true,
            },
            yAxis: {
                gridLineColor: '#f3f3f3',
                lineColor: '#f3f3f3',
                tickColor: '#f3f3f3',
                labels: {
                    style: {
                        color: 'gray',
                        align: 'right'
                    },
                    x: -30,
                    y: 18,
                },
                // offset: 20,
                title: {
                    enabled: false
                },
                opposite: true
            },
            legend: {
                enabled: false
            }
        };

        this.create = function (days, views) {

            var chartOptions = JSON.parse(JSON.stringify(CHART_OPTIONS_COMMON));
            chartOptions.series = [
                {
                    name: 'Visitors',
                    data: views,
                    index: 1,
                    states: {
                        hover: {
                            color: '#1453B0'
                        }
                    }
                }
            ];
            chartOptions.chart.width = $('body').width() < 1280 ? $('body').width() : $('body').width() - 420;
            chartOptions.chart.type = 'column';
            chartOptions.title.text = '';
            chartOptions.xAxis.categories = days;
            chartOptions.xAxis.title.text = 'Days';
            chartOptions.tooltip = {
                shared: false,
                useHTML: true,
                style: {
                    padding: 10
                },
                borderColor: '#f3f3f3',
                borderRadius: 4,
                backgroundColor: '#ffffff',
                headerFormat: `
                    <span class='tooltip-header'>
                        <b>December {point.key}, 2018</b>
                    </span>`,
                padding: 12,
                pointFormatter: function () {
                    return `
                        <span class='tooltip-box'>
                            <span class='tooltip-series'>
                                <span style="color:${this.color}">
                                    \u25CF
                                </span>
                                ${this.series.name}
                            </span>
                            <span class='tooltip-value'>
                                <b> ${$filter('number')(this.y, 0)} </b>
                            </span>
                        </span>
                    `;
                }
            };
            console.log('width:: ', $('body').width());
            $('#daily_visitors_chart').highcharts(chartOptions);
        }
    }

    ChartService.$inject = ['$log', '$filter'];

    angular.module('app')
        .service('ChartService', ChartService);

})();