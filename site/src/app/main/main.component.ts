import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  fadeInNext: boolean = true;
  fadeOut: boolean = false;
  fadeInMenu : boolean = false;
  fadeInStory : boolean = false;
  fadeOutStory : boolean = false;
  openStory: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  // onScroll(): void {
  //   window.scrollY
  //   const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   const windowHeight = window.innerHeight;

  //   // Calcola la posizione del testo rispetto allo scroll
  //   const textPosition = document.getElementById('animatedText')?.offsetTop

  //   // Calcola quando far apparire e scomparire il testo
  //   if (textPosition != undefined && scrollPosition > textPosition - windowHeight) {
  //     // this.fadeInNext = true;
  //   } 
  // }

  openAcc(index: number){
  }

  onMouseEnter() {
    console.log("mouse enter");
    this.fadeInStory = true;

  }

  onMouseOut(){
    console.log("mouse out");
    this.fadeInStory = false;
    this.fadeOutStory = true;
  }

}
