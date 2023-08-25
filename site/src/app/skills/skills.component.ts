import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  constructor(private translation: TranslationService) { }

  lang: string = 'it'
  
  ngOnInit(): void {
    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
  }

}
