import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { VisualisationService } from '../services/visualisation.service';
@Component({
  selector: 'app-analyse-sentiment',
  templateUrl: './analyse-sentiment.component.html',
  styleUrls: ['./analyse-sentiment.component.scss']
})
export class AnalyseSentimentComponent implements OnInit {

 
  public country = [] ;
  private dataXY:number[][]= new Array();
  private meanClusters = new Array();
  constructor(private service:VisualisationService) { }
  private tes:string[]=new Array();
  public dataset;
  
  ngOnInit(){
    this.country = [];
    var test = [];
    /* this.loadClusterAge(); */
    this.service.getClusterAge().subscribe(
      data => {
        for (let i = 0; i <data.countries.length ; i++) {
          test.push(
            {backgroundColor:'rgba(255,0,0,0.4)',
            label: 'test',
            data: {
                    x: data.data[i][0],
                    y: data.data[i][1],
                    r:50
                  }
            }
          );
         
        } 

         
      }
    );
    
    

    new Chart('bubble', {
      type: 'bubble',
      data: {
          datasets: test
            }
    })
  }
  loadClusterAge() {
    var data1 = new Array();
    var data2 = new Array();
    this.service.getClusterAge().subscribe(
      data => {
        for (let i = 0; i <data.countries.length ; i++) {
          /* console.log(data.countries[i]); */
          this.country.push(data.countries[i]);
        } 
   
        for (let i = 0; i <data.data.length ; i++) {
          data1.push(data.data[i]);
        } 
        for (let i = 0; i <data.meanClusters.length ; i++) {
          this.meanClusters.push(data.meanClusters[i]);
          } 
      }
    );
    for (let i = 0; i <data1.length ; i++) {
      data2.push({
        x:data1[i][0],
        y:data1[i][1],
        r:50
      });
    
      
    }
    for (let i = 0; i <data1.length ; i++) {
      this.dataset.push({
        backgroundColor:'rgba(255,0,0,0.4)',
        label:"test",
        data:data2[i]
      });
    }

  }

  test(){
    console.log(this.dataset);
  }

}
