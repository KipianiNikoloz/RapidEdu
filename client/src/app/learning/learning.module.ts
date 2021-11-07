import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningComponent } from './learning.component';
import { FactsComponent } from './facts/facts.component';
import { FactComponent } from './facts/fact/fact.component';
import {LearningRoutingModule} from "./learning-routing.module";
import { SubjectItemComponent } from './subject-item/subject-item.component';



@NgModule({
  declarations: [
    LearningComponent,
    FactsComponent,
    FactComponent,
    SubjectItemComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
