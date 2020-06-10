import { Component, OnInit } from '@angular/core';
import { VisualisationService } from '../services/visualisation.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.scss']
})
export class ComparaisonComponent implements OnInit {

  private country1 = "Morocco";
  private country2 = "Algeria";
  public data1;
  public data2;
  public formGroup: FormGroup;
  public labels = new Array();
  public chartLabels = this.labels;
  public chartType = 'line';
  public chartLegend = true;
  public chartData;
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor(private formBuilder: FormBuilder,private service:VisualisationService) { 
    for (let i = 0; i < 107; i++) {
      this.labels.push(i+1);
    }
  }

  ngOnInit(): void {
    this.ngForm();
    this.loadData(this.country1,this.country2);
  
    
  }
  onSubmit(){
    this.country1 = this.formGroup.value.country1;
    this.country2 = this.formGroup.value.country2;
    this.loadData(this.country1,this.country2);
  }

  ngForm(){
    this.formGroup = this.formBuilder.group({
      country1: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z]+[a-zA-Z]*')])],
      country2: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z]+[a-zA-Z]*')])]
    });
  }
  loadData(country1, country2){
    this.data1 = new Array();
    this.data2 = new Array();
    this.service.getConfirmedCases(country1).subscribe(
      data => {
        for (let i = 0; i < 107; i++) {
            this.data1.push(data.confirmed[i]);
        }
        console.log("data1",this.data1);
      });
      this.service.getConfirmedCases(country2).subscribe(
        data => {
          for (let i = 0; i < 107; i++) {
            this.data2.push(data.confirmed[i]);
        }
        console.log("data2",this.data2)
        });
        this.chartData = [
          { data: this.data1, label: 'Confirmed cases of '+this.country1 },
          { data: this.data2, label: 'Confirmed cases of '+this.country2 }
        ];
  }

}
