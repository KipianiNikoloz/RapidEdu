import { Injectable } from '@angular/core';
import {Fact} from "../shared/models/fact";

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  facts: Fact[] = [
    new Fact
    (
      "The first armed conflict in history recorded by eyewitnesses was the " +
      "Battle of Megiddo in 1479 BCE between Thutmose III (r. 1458-1425 BCE) " +
      "of Egypt and an alliance of former Egyptian territories under the leadership of the King of Kadesh.",
      "history"
    ),
    new Fact
    (
      "Alexander the Great conquered the entire known world in less than 10 years.",
      "history"
    ),
    new Fact
    (
      "While some Norse colonies were established in north eastern North America as early as the 10th century, " +
      "systematic European colonization began in 1492.",
      "history"
    ),
    new Fact
    (
      "The general theory of relativity (or general relativity for short) is a major building block of modern physics. " +
      "It explains gravity based on the way space can 'curve', or, to put it more accurately, " +
      "it associates the force of gravity with the changing geometry of space-time.",
      "physics"
    ),
    new Fact
    (
      "Isaac Newton was an English physicist and mathematician famous for his laws of physics. " +
      "He was a key figure in the Scientific Revolution of the 17th century.",
      "physics"
    ),
    new Fact
    (
      "E = mc^2",
      "physics"
    ),
    new Fact
    (
      "Stoicism is an ancient Greek school of philosophy founded at Athens by Zeno of Citium. " +
      "The school taught that virtue, the highest good, is based on knowledge; the wise live in " +
      "harmony with the divine Reason (also identified with Fate and Providence)" +
      " that governs nature, and are indifferent to the vicissitudes of fortune and to pleasure and pain.",
      "philosophy"
    ),
    new Fact
    (
      "Philosophy is the study of the fundamental nature of knowledge, reality," +
      " and existence, especially when considered as an academic discipline.",
      "philosophy"
    ),
    new Fact
    (
      "Friedrich Nietzsche was a German philosopher who became one of the most influential of " +
      "all modern thinkers. His attempts to unmask the motives that underlie traditional Western religion, " +
      "morality, and philosophy deeply affected generations of theologians, philosophers, psychologists, " +
      "poets, novelists, and playwrights",
      "philosophy"
    ),
    new Fact
    (
      "Don Quixote is the best-selling novel of all time, with over 500 million copies sold.",
      "literature"
    ),
    new Fact
    (
      "Nineteen Eighty-Four (also stylised as 1984) is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell. " +
      "It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime." +
      " Thematically, it centres on the consequences of totalitarianism, mass surveillance and repressive regimentation of people and behaviours within society.",
      "literature"
    ),
    new Fact
    (
      "To Kill a Mockingbird is Harper Lee's only novel, even though it won a Pulitzer Prize and spent 88 weeks on the best seller list.",
      "literature"
    )
  ]

  getFacts() {
    return this.facts;
  }

  getRandomFact(category: string) {
    const facts = this.getFacts();

    const filteredFacts = facts.filter(x => x.category === category)

    let length = this.getLength(filteredFacts);

    let index = this.getIndex(length - 1);

    return filteredFacts[index];
  }

  getCategories() {
    const facts = this.getFacts();

    let categories = facts.map(x => x.category);

    return categories.filter((value, index) => categories.indexOf(value) === index);
  }


  getLength(arr: Fact[]) {
    return arr.length;
  }

  getIndex(maximum: number) {
    let min = Math.ceil(0);
    let max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor() { }
}
