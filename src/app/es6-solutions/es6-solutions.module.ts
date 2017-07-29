import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es6SolutionsRoutingModule } from './es6-solutions-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    Es6SolutionsRoutingModule
  ],
  declarations: [LandingComponent]
})
export class Es6SolutionsModule { }
