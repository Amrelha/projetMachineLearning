import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VisualisationService {

  constructor(private http: Http) { }

  getConfirmedCases(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/confirmed/' + pays).pipe(map(resp => resp.json()));
  }
  getRecovered(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/recovered/' + pays).pipe(map(resp => resp.json()));
  }
  getDeath(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/death/' + pays).pipe(map(resp => resp.json()));
  }
  getStatistique(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/newdata/' + pays).pipe(map(resp => resp.json()));
  }
  getDeathCases(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/death/' + pays).pipe(map(resp => resp.json()));
  }
  getRecoveredCases(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/recovered/' + pays).pipe(map(resp => resp.json()));
  }
  StatistiqueMonde(){
    return this.http.get('http://127.0.0.1:5000/visualisation/StatistiqueMonde').pipe(map(resp => resp.json()));
  }
  dataByregion(){
    return this.http.get('http://127.0.0.1:5000/visualisation/regionsData').pipe(map(resp => resp.json()));
  }
  getClusterAge(){
    return this.http.get('http://127.0.0.1:5000/visualisation/clusterAge').pipe(map(resp => resp.json()));
  }
  getClusterTest(){
    return this.http.get('http://127.0.0.1:5000/visualisation/clusterTest').pipe(map(resp => resp.json()));
  }
  getClusterMeanAge(){
    return this.http.get('http://127.0.0.1:5000/visualisation/ageClusterMean').pipe(map(resp => resp.json()));
  }
  getClusterMeanTest(){
    return this.http.get('http://127.0.0.1:5000/visualisation/testClusterMean').pipe(map(resp => resp.json()));
  }
}
