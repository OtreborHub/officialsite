import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  // fadeInNext: boolean = true;
  // fadeOut: boolean = false;
  // fadeInMenu : boolean = false;
  // fadeInStory : boolean = false;
  // fadeOutStory : boolean = false;
  // openStory: boolean = false;
  
  constructor(private translation: TranslationService) { }

  lang: string = 'it';

  ngOnInit(): void {
    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
    // this.translate.setDefaultLang('it'); // Imposta la lingua predefinita
    // this.translate.use('it'); // Usa la lingua predefinita
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

}
