import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EvoComponent } from './evo/evo.component';
import { SkillsComponent } from './skills/skills.component';
import { BioComponent } from './bio/bio.component';
import { WhymeComponent } from './whyme/whyme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExpComponent } from './exp/exp.component';
import { IrSwitchComponent } from './projects/ir-switch/ir-switch.component';
import { FirstDappComponent } from './projects/first-dapp/first-dapp.component';
import { DashbordProjectsComponent } from './projects/dashbord-projects/dashbord-projects.component';
import { StudyCaseComponent } from './projects/study-case/study-case.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ContactusComponent,
    EvoComponent,
    SkillsComponent,
    BioComponent,
    WhymeComponent,
    ProjectsComponent,
    ExpComponent,
    IrSwitchComponent,
    FirstDappComponent,
    DashbordProjectsComponent,
    StudyCaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
