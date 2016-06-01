app.directive('quindarpie', function () {
    return {
      restrict : "AE",
      template: '<div class="quindarpie"></div>',
      //templateUrl: 'app/views/mal/template/widgets/quindarPie/quindarPie.html',
      scope: {
        chart: '='
      },
      //controller: 'FlotCtrl',
      replace: true,
      link: function postLink(scope, element) {
        var pieChart = new google.visualization.PieChart(element[0]);

        function draw(chart) {
          var data = chart.data;

          data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2014',  1000,      400],
          ['2015',  1170,      460],
          ['2016',  660,       1120],
          ['2017',  1030,      540]
          ]);

          var chartOptions = {
            title: 'Quindar Pie Chart',
            curveType: 'function',
            legend: { position: 'bottom' },
            width: 200,
            height: 200
          };

          pieChart.draw(data, chartOptions);
        }

        scope.$watch('chart', function (chart) {
          if (!chart) {
            chart = {
              data: [],
            };
          }

          if (chart.data) {
            draw(chart);
          }
        });

      }
    };
});
