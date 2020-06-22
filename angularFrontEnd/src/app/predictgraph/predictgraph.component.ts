import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color} from "ng2-charts";

@Component({
  selector: 'app-predictgraph',
  templateUrl: './predictgraph.component.html',
  styleUrls: ['./predictgraph.component.scss']
})
export class PredictgraphComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
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

        { x: 15, y: 15, r: 15 },
        { x: 25, y: 15, r: 15 },
        { x: 36, y: 12, r: 15 },
        { x: 10, y: 18, r: 15 },
      ],
      label:'cluster1'
    },
    {
      data: [

        { x: 20, y: 20, r: 15 },
        { x: 30, y: 15, r: 15 },
        { x: 10, y: 12, r: 15 },
        { x: 18, y: 30, r: 15 },
      ],
      label:'cluster2'
    },
  ];
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
