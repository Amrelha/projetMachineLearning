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

  constructor(private httpClient: HttpClient, private http: Http) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels =['2006','2007','2008','2009','2010','2011','2012'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
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
        console.log(data);
      }, error => {
        console.log(error); }
    );
  }
}
