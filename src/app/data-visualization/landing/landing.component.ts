import { DataVisualizationService } from './../data-visualization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  chartsData: any;
  constructor(private dataService: DataVisualizationService) { }

  ngOnInit() {

    this.dataService.getCharts('api/charts').subscribe(
      charts => {
         console.log("charts --> ", charts);
         this.chartsData = charts.data;
         console.log("chart data--> ", this.chartsData);
        },
      error => {console.log(error)} 
    );
  }

}
