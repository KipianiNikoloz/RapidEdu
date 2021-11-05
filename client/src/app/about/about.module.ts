import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AboutRoutingModule } from "./about-routing.module";

@NgModule({
  declarations: [
    AboutComponent,
    ProfileItemComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
