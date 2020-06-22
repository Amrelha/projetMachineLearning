import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {Color} from "ng2-charts";
@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  
}
