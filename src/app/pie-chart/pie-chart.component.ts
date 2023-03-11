import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
    Highcharts=Highcharts
    chartOptions={}
    constructor(){
      this.chartOptions={
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Students Admission 2022',
          align: 'left'
      },
      credits:{
        enabled:false
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Course',
          colorByPoint: true,
          data: [{
              name: 'MEARN',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'Python',
              y: 14.77
          },  {
              name: 'ASP .net',
              y: 4.86
          }, {
              name: 'Testing',
              y: 2.63
          }, {
              name: 'Flutter',
              y: 1.53
          },  {
              name: 'Big Data',
              y: 1.40
          }, {
              name: 'PHP',
              y: 0.84
          }, {
              name: 'Java Spring',
              y: 0.51
          }, {
              name: 'AWS',
              y: 2.6
          }]
      }]
      }
      HC_exporting(Highcharts);
    }
}
