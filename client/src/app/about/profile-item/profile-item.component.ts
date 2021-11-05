import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../shared/models/profile";

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss']
})
export class ProfileItemComponent implements OnInit {

  @Input() profile!: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
