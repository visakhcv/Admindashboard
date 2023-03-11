import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chat',
  templateUrl: './area-chat.component.html',
  styleUrls: ['./area-chat.component.css']
})
export class AreaChatComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Our Placement',
          align: 'center'
      },
      subtitle: {
          text: 'Luminar Technolab',
          align: 'center'
      },
      xAxis:{
        categories:['jan','feb,','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
        accessibility:{
          description:'months of year'
        }
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Number of Placements'
          }
      },
      credits:{
        enabled:false
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'MEARN',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214, 16714, 16914, 16714]
      }, {
          name: 'Big Data',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039 ,5039 ,5039, 5039]
  
      }, {
          name: 'Testing',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,4913 ,4913,4913]
      }, {
          name: 'ASP .net',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550 ,1550 ,1550 ,1550 ]
  
      }, {
          name: 'Python',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,2176,2176,2176]
      }]
  }
  HC_exporting(Highcharts);

  }
  


}
