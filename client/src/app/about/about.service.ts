import { Injectable } from '@angular/core';
import {Profile} from "../shared/models/profile";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  profiles: Profile[] = [
    new Profile
    (
      "Nikoloz Kipiani",
      "Web Developer",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1627664410/ogae6t5zu3t9txmhzlup.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elementum turpis. " +
      "Fusce consectetur nec leo mollis tincidunt. Mauris tempor risus vitae congue ullamcorper. " +
      "Donec libero tellus, rutrum in auctor et, dictum et lectus. Sed auctor massa sed felis faucibus posuere vitae vel risus. " +
      "Vivamus congue, turpis ut laoreet pellentesque. "
    ),
    new Profile
    (
      "Nikoloz Kipiani",
      "Web Developer",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1627664410/ogae6t5zu3t9txmhzlup.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elementum turpis. " +
      "Fusce consectetur nec leo mollis tincidunt. Mauris tempor risus vitae congue ullamcorper. " +
      "Donec libero tellus, rutrum in auctor et, dictum et lectus. Sed auctor massa sed felis faucibus posuere vitae vel risus. " +
      "Vivamus congue, turpis ut laoreet pellentesque. "
    ),
    new Profile
    (
      "Nikoloz Kipiani",
      "Web Developer",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1627664410/ogae6t5zu3t9txmhzlup.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elementum turpis. " +
      "Fusce consectetur nec leo mollis tincidunt. Mauris tempor risus vitae congue ullamcorper. " +
      "Donec libero tellus, rutrum in auctor et, dictum et lectus. Sed auctor massa sed felis faucibus posuere vitae vel risus. " +
      "Vivamus congue, turpis ut laoreet pellentesque. "
    ),
    new Profile
    (
      "Nikoloz Kipiani",
      "Web Developer",
      "https://res.cloudinary.com/nikolozscloud/image/upload/v1627664410/ogae6t5zu3t9txmhzlup.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elementum turpis. " +
      "Fusce consectetur nec leo mollis tincidunt. Mauris tempor risus vitae congue ullamcorper. " +
      "Donec libero tellus, rutrum in auctor et, dictum et lectus. Sed auctor massa sed felis faucibus posuere vitae vel risus. " +
      "Vivamus congue, turpis ut laoreet pellentesque. "
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
