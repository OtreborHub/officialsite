import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-first-dapp',
  templateUrl: './first-dapp.component.html',
  styleUrls: ['./first-dapp.component.sass']
})
export class FirstDappComponent implements OnInit {

  constructor(private translation: TranslationService) { }

  lang: string = 'it'
  
  ngOnInit(): void {
    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
  }

}
