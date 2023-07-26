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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ContactusComponent,
    EvoComponent,
    SkillsComponent,
    BioComponent,
    WhymeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
