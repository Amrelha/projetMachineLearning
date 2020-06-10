import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-graphe-visualisation',
  templateUrl: './graphe-visualisation.component.html',
  styleUrls: ['./graphe-visualisation.component.scss']
})
export class GrapheVisualisationComponent implements OnInit {
  totalCases: number;
  death: number;
  recovered: number;
  tablo = new Array();
  mydata = new Array();
  mydata1 = new Array();
  mydata2 = new Array();
  numbers = new Array();

  constructor(private httpClient: HttpClient, private http: Http) {
    for(var i=0;i<=107;i++){
      this.numbers.push(i);
    }

  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this.numbers;
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    { data: this.mydata, label: 'Confirmed cases' }
  ];

  public barChartOptions1 = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels1 = this.numbers;
  public barChartType1 = 'line';
  public barChartLegend1 = true;
  public barChartData1 = [
    { data: this.mydata1, label: 'Recovered cases' }
  ];

  public barChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels2 = this.numbers;
  public barChartType2 = 'line';
  public barChartLegend2 = true;
  public barChartData2 = [
    { data: this.mydata2, label: 'Death cases' }
  ];
  public chartColors2: Array<any> = [
    {
      backgroundColor: 'rgba(255, 65, 24, .5)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
  ];
  public chartColors1: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  ngOnInit(): void {
  }
  getconfirmed(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/confirmed/' + pays).pipe(map(resp => resp.json()));
  }
  getrecovered(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/recovered/' + pays).pipe(map(resp => resp.json()));
  }
  getdeath(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/death/' + pays).pipe(map(resp => resp.json()));
  }

  getStati(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/newdata/' + pays).pipe(map(resp => resp.json()));
  }
  onSubmit(f: NgForm) {
    console.log(f.value.name);
    this.getconfirmed(f.value.name).subscribe(
      data => {
        console.log(this.mydata);
        for(var i=0;i<=107;i++){
          this.mydata.push(data.confirmed[i]);
        }
      }, error => {
        console.log(error); }
    );
    this.getrecovered(f.value.name).subscribe(
      data => {
        console.log(data);
        for(var i=0;i<=107;i++){
          this.mydata1.push(data.recovered[i]);
        }
      }, error => {
        console.log(error); }
    );
    this.getdeath(f.value.name).subscribe(
      data => {
        console.log(data);
        for(var i=0;i<=107;i++){
          this.mydata2.push(data.deaths[i]);
        }
      }, error => {
        console.log(error); }
    );

    this.getStati(f.value.name).subscribe(
      data => {
        console.log(data);
        this.totalCases = data.totalCases;
        this.death = data.death;
        this.recovered = data.recovered;
        this.tablo.push(Number(data.death.toString().replace(".","")));
        this.tablo.push(Number(data.totalCases.toString().replace(".","")));
        this.tablo.push(Number(data.recovered.toString().replace(".","")));
        console.log(this.tablo);
      }, error => {
        console.log(error); }
    );



  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }




  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: this.tablo, label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Décès', 'Confirmés', 'Guérisons'];

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
}
