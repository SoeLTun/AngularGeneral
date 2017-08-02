
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeModule: string;

  
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(route => {
      console.log("**", route['url']);
      this.activeModule = route['url'] ? route['url'].replace("/","") : "";
    });
    
  }

   RouteTo(e: any, path: string){
     this.activeModule = path;
     this.router.navigateByUrl(path);
    }
  
}
