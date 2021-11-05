import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from "./about.component";
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: ':id', component: ProfileDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
