import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExpComponent } from './exp/exp.component';
import { DashbordProjectsComponent } from './projects/dashbord-projects/dashbord-projects.component';
import { FirstDappComponent } from './projects/first-dapp/first-dapp.component';
import { IrSwitchComponent } from './projects/ir-switch/ir-switch.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudyCaseComponent } from './projects/study-case/study-case.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ExpComponent,
    ProjectsComponent,
    SkillsComponent,
    DashbordProjectsComponent,
    IrSwitchComponent,
    FirstDappComponent,
    StudyCaseComponent,
    AboutmeComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
