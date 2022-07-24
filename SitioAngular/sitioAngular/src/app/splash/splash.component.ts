import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  mybreakpoint:any = 0;
  myrowheight:string = ""
  titulo:string = "Página splash!";

  constructor() { }

  ngOnInit(): void {
    this.mybreakpoint = (window.innerWidth < 720) ? 1 : 2;
    this.myrowheight = this.breakpoints_height(window.innerWidth);
  }

  handleSize(event: any) {
    this.mybreakpoint = (event.target.innerWidth < 720) ? 1 : 2;
    this.myrowheight = this.breakpoints_height(window.innerWidth);
  }

  breakpoints_height(innerWidth: number): string{
    if (innerWidth < 540) {     //display xs
      return "1.2:1";
    }
    else if(innerWidth < 720) { //display sm
      return "1:0.5";
    }
    else if(innerWidth < 960){  //display md
      return "1.2:1";
    }
    else if(innerWidth < 1140){ //display lg
      return "1.6:1";
    }
    else if(innerWidth < 1320){ //display xl
      return "2.2:1";
    }
    else{                       // display xxl
      return "2.5:1";
    }
  }
}
