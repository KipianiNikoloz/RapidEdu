import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LearningComponent } from "./learning.component";
import {FactsComponent} from "./facts/facts.component";

const routes: Routes = [
  { path: '', component: LearningComponent},
  { path: 'facts', component: FactsComponent }
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
export class LearningRoutingModule { }
