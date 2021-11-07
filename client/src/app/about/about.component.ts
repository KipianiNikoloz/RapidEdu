import { Component, OnInit } from '@angular/core';
import {Profile} from "../shared/models/profile";
import {AboutService} from "./about.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profiles!: Profile[];

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.profiles = this.aboutService.getProfiles();
  }

}
