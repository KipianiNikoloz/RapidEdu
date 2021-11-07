import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.scss']
})
export class SubjectItemComponent implements OnInit {

  @Input() subject!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
