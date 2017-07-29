import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsRoutingModule } from './controls-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    ControlsRoutingModule
  ],
  declarations: [LandingComponent]
})
export class ControlsModule { }
