import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evo',
  templateUrl: './evo.component.html',
  styleUrls: ['./evo.component.sass']
})
export class EvoComponent implements OnInit {

  elements: String[] = ["Elettronica", "Informatica", "Blockchain", "Gaming & Sport"]
  elementsDescription: String[] = [
    "Primo ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua." +
    "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." +
    "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
    "Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    "Secondo ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua." +
    "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." +
    "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
    "Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    "Terzo ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua." +
    "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." +
    "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
    "Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    "Quarto ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua." +
    "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." +
    "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
    "Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ]

  elementsDate: String[] = [
    "2009 - 2017", "2017 - in corso", "2021 - in corso", " da sempre "
  ]

  counter: number = 0;
  selectedElement = this.elements[this.counter];
  selectedDescription = this.elementsDescription[this.counter];
  selectedDate = this.elementsDate[this.counter];
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.nextElement(true);
    // }, 5000)
  }

  nextElement(direction: boolean){
    if(direction){
      if(this.counter == this.elements.length - 1){
        this.counter = -1;
      }
      this.counter++;
    } else {
      if(this.counter == 0){
        this.counter = this.elements.length
      }
      this.counter--;
    }
    
    this.selectedElement = this.elements[this.counter];
    this.selectedDescription = this.elementsDescription[this.counter];
    this.selectedDate = this.elementsDate[this.counter];
  }

  changeArrowColor() {
    if(this.counter ==  0){
      return "#ffffff";
    } else {
      return "#000000"
    }
  }
}

