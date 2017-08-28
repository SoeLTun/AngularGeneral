import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.duplicateInArray();
   console.log("-->",this.firstNonDuplicateCharacter("bcccccccccccccyb") ); 
  }

  duplicateInArray(a: number[] = [2, 2]) {
     let dupindex ;
      for(let i= 0; i < a.length ; i++){
            let index = Math.abs(a[i]) -1;
            if(a[index] < 0)   !dupindex  ?  dupindex = i : dupindex = Math.min(i, dupindex);
            else a[index] *= -1;
}
      return  dupindex ? Math.abs(a[dupindex]) : -1;
  }

  firstNonDuplicateCharacter(s) {
    let obj = {};
    s.split('').map(c => {
      if(c in obj) obj[c]++;
      else(obj[c] = 1);
    })
    return Object.keys(obj).filter(key => obj[key] === 1).shift();
  }
}
