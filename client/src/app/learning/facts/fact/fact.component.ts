import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fact} from "../../../shared/models/fact";

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss']
})
export class FactComponent implements OnInit {

  @Input() fact!: Fact;
  @Output() reloadEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  reloadInform() {
    this.reloadEvent.emit();
  }

}
