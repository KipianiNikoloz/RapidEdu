import { Component, OnInit } from '@angular/core';
import {Profile} from "../../shared/models/profile";
import {ActivatedRoute} from "@angular/router";
import {AboutService} from "../about.service";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  profile!: Profile;

  constructor(private route: ActivatedRoute, private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    let id: number = +(this.route.snapshot.paramMap.get("id") as string)

    this.profile = this.aboutService.getProfile(id);
  }

}
