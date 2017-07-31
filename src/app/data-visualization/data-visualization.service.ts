import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';


@Injectable()
export class DataVisualizationService {

  constructor(private http: Http) { }

  getCharts(url: string):Observable<any>{
    console.log("getting charts---> ",url )
    return this.http.get(url).map(res => res.json() || {});

  }

}
