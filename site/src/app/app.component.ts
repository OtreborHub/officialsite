import { Component, OnInit } from '@angular/core';
import { initFirebase } from './firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'site';

  ngOnInit(){
    initFirebase();
  }
}
