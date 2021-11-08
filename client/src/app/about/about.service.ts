import { Injectable } from '@angular/core';
import {Profile} from "../shared/models/profile";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  profiles: Profile[] = [
    new Profile
    (
      "Baia Grdzelishvili",
      15,
      "Project Manager/Designer",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1636310896/MicrosoftTeams-image_ztygol.jpg",
      "Baia Grdzelishvili, 15 years old.  Interested in the Stem field.  Learns robotics and programming. She loves art, science and technologies. Has a TBC Bank scholarship. Winner and participant in various projects. And she's constantly trying to develop herself."
    ),
    new Profile
    (
      "Nikoloz Kipiani",
      15,
      "Web Developer",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1627664410/ogae6t5zu3t9txmhzlup.jpg",
      "Nikoloz is the Web Developer of our team. He has been programming for quite some time now. He specializes in Web Dev, even though he is currently taking Dartmouth's course on C and Linux. Nikoloz is an alumni of IT Step Academy. During his time as a developer he has worked on quite a few projects. He is currently teaching programming to students at his school alongside Giorgi Zhvania. His hobbies are reading, gaming and sports."
    ),
    new Profile
    (
      "George Constantine Lypiridis",
      15,
      "Scrum Master/QA Tester",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1636309918/253830963_4545795708838720_7179132543737718756_n_ulbwlb.jpg",
      "George Constantine Lypiridis is a part of our programming team. He was born in 2005, 12 August in Greece, Thessalonica. George has been studying various programming languages for over two years and he has contributed into smaller projects before. Other than that Constantine really likes physics, history and creating music."
    ),
    new Profile
    (
      "Giorgi Zhvania",
      16,
      "Designer",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1636310156/168186337_3811871068929732_1524947341667448352_n.jpg_vppyay.jpg",
      "Giorgi is 16 years old. He likes working with computers and programming. He has been developing websites for 3 years. He has been interested in tech since young age. He is an alumni of IT Step Academy. Him and Nikoloz are currently teaching students at their school how to program. Outside of school he enjoys playing football, gaming and cryptotrading."
    )
  ]

  getProfiles(): Profile[] {
    return this.profiles;
  }

  getProfile(id: number): Profile {
    return this.profiles[id];
  }

  constructor() { }
}
