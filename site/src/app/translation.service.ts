import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() {}
  public changeLang: EventEmitter<string> = new EventEmitter<string>();
  private lang:string = 'it'

  toggleLanguage(currentLang: string){
    
    if(currentLang != null && currentLang == 'it'){
      this.lang = 'en'
    } else if (currentLang != null && currentLang == 'en') {
        this.lang = 'it'
    }

    localStorage.setItem('appLang', this.lang);
    this.changeLang.emit(this.lang);
  }

  getLanguage(): string {
    // Verifica se il valore è presente nel localStorage e, in caso contrario, usa il valore predefinito 'it'
    return localStorage.getItem('appLang') || this.lang;
  }

}
