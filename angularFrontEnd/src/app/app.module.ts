import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { PredictComponent } from './predict/predict.component';
import { AnalyseSentimentComponent } from './analyse-sentiment/analyse-sentiment.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    VisualisationComponent,
    PredictComponent,
    AnalyseSentimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
