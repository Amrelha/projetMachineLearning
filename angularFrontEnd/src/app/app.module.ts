import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { PredictComponent } from './predict/predict.component';
import { AnalyseSentimentComponent } from './analyse-sentiment/analyse-sentiment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';
import { ComparaisonComponent } from './comparaison/comparaison.component';
import {MatInputModule} from '@angular/material/input';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { GrapheVisualisationComponent } from './graphe-visualisation/graphe-visualisation.component';
import { VisualisationService } from './services/visualisation.service';
import { AcceuilCompoComponent } from './acceuil-compo/acceuil-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    VisualisationComponent,
    PredictComponent,
    AnalyseSentimentComponent,
    ComparaisonComponent,
    GrapheVisualisationComponent,
    AcceuilCompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    MatInputModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [VisualisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
