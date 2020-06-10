import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent implements OnInit {
  mydata = new Array();
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
  ngOnInit(): void {
  }
  afficherClients(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/confirmed/' + pays).pipe(map(resp => resp.json()));
  }
  onSubmit(f: NgForm) {
    console.log(f);
    this.afficherClients('Morocco').subscribe(
      data => {


        console.log(this.mydata);
        for(var i=0;i<=107;i++){
          this.mydata.push(data.confirmed[i]);
        }
      }, error => {
        console.log(error); }
    );
  }
}
