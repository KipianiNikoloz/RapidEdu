import { Component, OnInit } from '@angular/core';
import {LearningService} from "./learning.service";

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  subjects!: string[];

  constructor(private learningService: LearningService) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects() {
    this.subjects = this.learningService.getCategories();
  }

}
