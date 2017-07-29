import { Es6SolutionsModule } from './es6-solutions/es6-solutions.module';

import { DataVisualizationModule } from './data-visualization/data-visualization.module';
import { ControlsModule } from './controls/controls.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlsModule,
    DataVisualizationModule,
    Es6SolutionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
