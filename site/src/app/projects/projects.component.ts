import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  fadeIn0 : boolean = false;
  fadeIn1 : boolean = false;
  fadeIn2 : boolean = false;

  ngOnInit(): void {
    // setInterval(() => {
    //   this.startAnimation = true;
    // }, 2000)
  }


  // onScroll(): void {
  //   const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   const windowHeight = window.innerHeight;

  //   // Calcola la posizione del testo rispetto allo scroll
  //   const descPosition0 = document.getElementById('desc0')?.offsetTop
  //   const descPosition1 = document.getElementById('desc1')?.offsetTop
  //   const descPosition2 = document.getElementById('desc2')?.offsetTop
    
  //   console.log("desc0: " + descPosition0 + ", desc1: " + descPosition1 + ", desc2: " + descPosition2)
  //   // Calcola quando far apparire e scomparire il testo
  //   if (descPosition0 != undefined && scrollPosition > descPosition0 - windowHeight && this.fadeIn0 == false) {
  //     this.fadeIn0 = true;
  //   } 
  //   if (descPosition1 != undefined && scrollPosition > descPosition1 - windowHeight && this.fadeIn1 == false) {
  //     this.fadeIn1 = true;
  //   } 
  //   if (descPosition2 != undefined && scrollPosition > descPosition2 - windowHeight && this.fadeIn2 == false) {
  //     this.fadeIn2 = true;
  //   } 
    
  // }

}
