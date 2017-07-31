import { ChartModule } from 'angular2-highcharts';
import { DataVisualizationService } from './data-visualization.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DataVisualizationRoutingModule} from './datavisualization-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    DataVisualizationRoutingModule
  ],
  declarations: [LandingComponent],
  providers:[DataVisualizationService]
})
export class DataVisualizationModule { }
