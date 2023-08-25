import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-dashbord-projects',
  templateUrl: './dashbord-projects.component.html',
  styleUrls: ['./dashbord-projects.component.sass']
})
export class DashbordProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private translation: TranslationService) { }

  id: number = 0;
  lang: string = 'it';

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params['id']);
    this.lang = this.translation.getLanguage();
    
    this.translation.changeLang.subscribe(() => {
      this.lang = this.translation.getLanguage();
    })
  }

  

}
