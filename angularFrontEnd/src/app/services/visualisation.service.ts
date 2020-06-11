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
  getDeathCases(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/death/' + pays).pipe(map(resp => resp.json()));
  
    
 
  }
  getRecoveredCases(pays: string) {
    return this.http.get('http://127.0.0.1:5000/visualisation/recovered/' + pays).pipe(map(resp => resp.json()));
 
  }
}
