import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-study-case',
  templateUrl: './study-case.component.html',
  styleUrls: ['./study-case.component.sass']
})
export class StudyCaseComponent implements OnInit {

  public lang: string = 'it';

  constructor(private translation: TranslationService) { }

  ngOnInit(): void {
    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
  }


}
