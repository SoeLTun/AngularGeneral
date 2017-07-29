import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DataVisualizationRoutingModule} from './datavisualization-routing.module'
@NgModule({
  imports: [
    CommonModule,
    DataVisualizationRoutingModule
  ],
  declarations: [LandingComponent]
})
export class DataVisualizationModule { }
