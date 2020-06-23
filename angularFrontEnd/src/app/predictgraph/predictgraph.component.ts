import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color} from "ng2-charts";
import {VisualisationService} from "../services/visualisation.service";

@Component({
  selector: 'app-predictgraph',
  templateUrl: './predictgraph.component.html',
  styleUrls: ['./predictgraph.component.scss']
})
export class PredictgraphComponent implements OnInit {

  constructor(private service: VisualisationService) { }
  ngOnInit(): void {

    this.service.getTestClusters().subscribe(
      data => {
        console.log(this.bubbleChartData);
        for (let i of data) {
          if(i['cluster']==1){
            this.bubbleChartData[0]['data'].push({ x:i['x'] , y: i['y'], r: 5} );
            this.bubbleChartData[0]['label']='cluster1: '+i['country'];
          }else if(i['cluster']==2){
            this.bubbleChartData[1]['data'].push({ x:i['x'] , y: i['y'], r: 5} );
            this.bubbleChartData[1]['label']='cluster2: '+i['country'];
          }else if(i['cluster']==3){
            this.bubbleChartData[2]['data'].push({ x:i['x'] , y: i['y'], r: 5} );
            this.bubbleChartData[2]['label']='cluster3: '+i['country'];
          }else{
            this.bubbleChartData[3]['data'].push({ x:i['x'] , y: i['y'], r: 5} );
            this.bubbleChartData[3]['label']='cluster4: '+i['country'];
          }
           // 1, "string", false
        }
      }, error => {
        console.log(error); }
    );
  }
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {

      data: [

      ],

    },
    {
      data: [

      ],

    },
    {
      data: [

      ],

    },
    {
      data: [

      ],

    },
  ];
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    },
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
      backgroundColor: 'rgba(0,255,0,0.3)',
      borderColor: 'rgba(0,255,0,1)'
    }
  ];
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
