import { Component, OnInit } from '@angular/core';
import {VisualisationService} from "../services/visualisation.service";

@Component({
  selector: 'app-acceuil-compo',
  templateUrl: './acceuil-compo.component.html',
  styleUrls: ['./acceuil-compo.component.scss']
})
export class AcceuilCompoComponent implements OnInit {
  constructor(private service: VisualisationService) {}
  totalCases: string;
  death: string;
  recovered: string;
  ngOnInit(): void {
    this.service.StatistiqueMonde().subscribe(
      data => {
        console.log(data);
        this.totalCases = data.totalCases;
        this.death = data.death;
        this.recovered = data.recovered;
      }, error => {
        console.log(error); }
    );
  }

}
