import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path:'story', component: MainComponent},
  {path:'what-to-know', component: MainComponent},
  {path:'philosofy', component: MainComponent},
  {path:'meetus', component: ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
