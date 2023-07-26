import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  language: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(){
    if(this.language == true){
      this.language = false;
    }else{
      this.language = true;
    }
  }

  goSomewhere(){
    
  }
}
