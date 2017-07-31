
import { Es6SolutionsModule } from './es6-solutions/es6-solutions.module';
import { DataVisualizationModule } from './data-visualization/data-visualization.module';
import { ControlsModule } from './controls/controls.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule} from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpModule } from '@angular/http';
export function highchartsFactory() {
  return require('highcharts');
}
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
    Es6SolutionsModule,
    ChartModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
   
  ],
  providers: [
    {provide: HighchartsStatic, useFactory: highchartsFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
