import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  
  lang: string = "it";
  activePage: string = 'home';
  constructor(private translateService: TranslationService, private router: Router) { }

  ngOnInit(): void {
    this.getLanguage();
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        var url = val.url.substring(1);

        if(url.startsWith("projects")){
          url = url.substring(0, 8)
        }

        console.log(url);
        this.makeActive(url);
        window.scrollTo(0, 0);
      }
  });
  }

  changeLanguage(){
    var lang: any = document.getElementById('check-language')
    this.translateService.toggleLanguage(lang.value);
    this.getLanguage();
  }

  getLanguage() {
    this.lang = this.translateService.getLanguage();
  }

  makeActive(page: string){
    this.activePage = page;
  }
}
