import { Component, OnInit } from '@angular/core';
import {LearningService} from "../learning.service";
import {Fact} from "../../shared/models/fact";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  fact!: Fact;
  category!: string;

  constructor(private learningService: LearningService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.queryParamMap.get("category") as string;

    this.getFact(this.category);
  }

  getFact(category: string) {
    this.fact = this.learningService.getRandomFact(category);
  }

  getReloadedFact(category: string) {
    let fact = this.learningService.getRandomFact(category);

    if(fact === this.fact) {
      this.getReloadedFact(category);
    } else {
      this.fact = fact;
    }
  }

}

