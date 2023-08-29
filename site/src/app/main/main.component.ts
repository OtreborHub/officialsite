import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  
  constructor(private translation: TranslationService) { }

  lang: string = 'it';

  ngOnInit(): void {
    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
  }
  
}
