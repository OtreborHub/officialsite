import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-ir-switch',
  templateUrl: './ir-switch.component.html',
  styleUrls: ['./ir-switch.component.sass']
})
export class IrSwitchComponent implements OnInit {

  public lang: string = 'it';

  constructor(private translation: TranslationService) { }

  ngOnInit(): void {
    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
  }

}
