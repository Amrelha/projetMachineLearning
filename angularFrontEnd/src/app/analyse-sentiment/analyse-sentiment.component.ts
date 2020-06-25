import { Component, OnInit } from '@angular/core';
import {VisualisationService} from "../services/visualisation.service";

@Component({
  selector: 'app-analyse-sentiment',
  templateUrl: './analyse-sentiment.component.html',
  styleUrls: ['./analyse-sentiment.component.scss']
})
export class AnalyseSentimentComponent implements OnInit {
tweet = [];
positive = 0;
negative = 0 ;
neutral = 0;

  constructor(private service: VisualisationService) { }

  ngOnInit(): void {
    this.tweet = [];
    this.service.analyseSentiment().subscribe(
      data => {
        this.tweet.push(data.neutral);
        this.tweet.push(data.negative);
        this.tweet.push(data.positive);
      }, error => {
        console.log(error); }
    );


    this.chartDatasets = [{ data: this.tweet, label: 'My First dataset' }];
    this.chartLabels = ['Red', 'Green', 'Yellow'];
  }
  public chartType: string = 'pie';

  public chartDatasets: Array<any>;

  public chartLabels: Array<any> ;

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
