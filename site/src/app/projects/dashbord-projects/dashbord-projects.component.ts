import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashbord-projects',
  templateUrl: './dashbord-projects.component.html',
  styleUrls: ['./dashbord-projects.component.sass']
})
export class DashbordProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params['id'])
  }

}
