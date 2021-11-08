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
      "During World War II, a Great Dane named Juliana was awarded the Blue Cross Medal. She extinguished an incendiary bomb by peeing on it!",
      "history"
    ),
    new Fact
    (
      "There were female Gladiators in Ancient Rome! A female gladiator was called a Gladiatrix, or Gladiatrices. They were extremely rare, unlike their male counterparts.",
      "history"
    ),
    new Fact
    (
      "From 1912 to 1948, the Olympic Games held competitions in the fine arts. Medals were given for literature, architecture, sculpture, painting, and music. Obviously, the art created was required to be Olympic-themed.",
      "history"
    ),
    new Fact
    (
      "George Washington opened a whiskey distillery after his presidency. After his term, Washington opened a whiskey distillery. By 1799, Washington’s distillery was the largest in the country, producing 11,000 gallons of un-aged whiskey!",
      "history"
    ),
    new Fact
    (
      " During the Salem witch trials, the accused witches weren’t actually burned at the stake. The majority were jailed, and some were hanged. But none of the 2,000 people accused ever got burned alive.",
      "history"
    ),
    new Fact
    (
      "In 1386, a pig was executed in France. In the Middle Ages, a pig attacked a child who went to die later from their wounds. The pig was arrested, kept in prison, and then sent to court where it stood trial for murder, was found guilty and then executed by hanging!",
      "history"
    ),
    new Fact
    (
      "The shortest war in history lasted 38 minutes! It was between Britain and Zanzibar and known as the Anglo-Zanzibar War, this war occurred on August 27, 1896. It was over the ascension of the next Sultan in Zanzibar and resulted in a British victory.",
      "history"
    ),
    new Fact
    (
      " The first official Medals of Honor were awarded during the American Civil War. They were awarded to Union soldiers who participated in the Great Locomotive Chase of 1862.",
      "history"
    ),
    new Fact
    (
      "In 18th century England, pineapples were a status symbol. Those rich enough to own a pineapple would carry them around to signify their personal wealth and high-class status. In that day and age, everything from clothing to houseware was decorated with the tropical fruit.",
      "history"
    ),
    new Fact
    (
      "In Ancient Greece, they believed redheads became vampires after death! This was partly because redheaded people are very pale-skinned and sensitive to sunlight. Unlike the Mediterranean Greeks who had olive skin and dark features.",
      "history"
    ),
    new Fact
    (
      "Before alarm clocks and way before smartphone alarms, there were people called knocker-uppers who would literally knock on people’s window to wake them up in time for work. Up until the 1970s, knocker-uppers used a long stick, soft hammers, rattles, or even pea shooters to reach their clients’ windows!",
      "history"
    ),
    new Fact
    (
      "For over 30 years, Canada and Denmark have been playfully fighting for control of a tiny island near Greenland called Hans Island. Once in a while, when officials from each country visit, they leave a bottle of their country’s liquor as a power move.",
      "history"
    ),
    new Fact
    (
      "As Saint Lawrence was roasted on a gridiron by the prefect of Rome during the persecution of Christians, legend says, he cheerfully declared: “I’m well done on this side. Turn me over!” Because of this, he derives his patronage of cooks, chefs, and comedians.",
      "history"
    ),
    new Fact
    (
      "In 1945, a balloon bomb launched by Japan landed in Oregon. It fell upon by a woman and five children, who died when it exploded. These were the only World War II casualties on US soil.",
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
      "in the peiod between 1949-1955 a very strange event took place. The soviet union decided to formally ask to join NATO.\n" +
      "The two people that came up with this idea were\n" +
      "lavrenty beria and viator slav Molotov.\n" +
      " Their plan involved several steps\n" +
      "the first was the reunification of\n" +
      "germany on the condition that it becomes\n" +
      "a perpetually neutral state\n" +
      "in return for what was essentially the\n" +
      "ussr giving up east germany the leaders\n" +
      "of which were not consulted.\n" +
      " the soviet\n" +
      "union wanted to join the new european\n" +
      "defense community which as the name\n" +
      "suggests didn't include warmongering nations\n" +
      "this offer was semi-serious in that the\n" +
      "soviet leadership expected it to be\n" +
      "rejected but prepared for the\n" +
      "eventuality that the western leadership\n" +
      "would get very drunk and\n" +
      "say yes\n" +
      "it was a win-win situation either way. if the western powers\n" +
      "rejected soviet membership then they\n" +
      "were admitting that nato was in fact an\n" +
      "anti-soviet bloc which would in turn\n" +
      "allow the ussr to build its own alliance\n" +
      "and give it much greater free reign in\n" +
      "its foreign policy\n" +
      "if the western powers accepted soviet\n" +
      "membership the nato's character as an\n" +
      "anti-soviet alliance would change into a\n" +
      "general european defensive one and also\n" +
      "germany would stay forever disarmed\n" +
      "which given recent events was something\n" +
      "that the ussr very much wanted\n" +
      "as you'll be aware the answer from the\n" +
      "west was a no \n" +
      "because of the exact same\n" +
      "reasons that the ussr wanted to join\n" +
      "however they weren't so open about the\n" +
      "exact reason why and cited the ussr's\n" +
      "non-democratic government and occupation\n" +
      "of eastern european nations for the\n" +
      "negative response\n" +
      "and so the ussr was now free to act in\n" +
      "retaliation and did so by forming its\n" +
      "own alliance in 1955 and thus\n" +
      "the warsaw pact was formed.",
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
      "Newton's first law states that if a body is at rest or moving at a constant speed in a straight line in a inertial shear system, it will remain at rest or keep moving in a straight line at constant speed unless it is acted upon by a force.",
      "physics"
    ),
    new Fact
    (
      "Newton's II Law --- if there is force applied on an object, then the object has an acceleration that is proportional to the sum vectorical sum of all forces applied on the object and disproportional to the object mass",
      "physics"
    ),
    new Fact
    (
      "Newton's III Law --- if an object is acting upon another object then the other subject is acting upon the first one with the force that has an opposite direction. these forces will never be able to cancel out each other because they exist on different objects",
      "physics"
    ),
    new Fact
    (
      "Newton's IV Law --- any two objects that contain mass are pulling each other with a force that is proportional to the masses of both object and disproportional to the square of the distance between them",
      "physics"
    ),
    new Fact
    (
      "Pascal's I Law - pressure , when applied to air and liquids, is proportionally distributed in all directions",
      "physics"
    ),
    new Fact
    (
      "Energy can be changed from one form to another, but it cannot be created or destroyed.",
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
      "The ancient philosopher Diogenes once delivered Plato a plucked chicken and called it a 'man.' You see, Plato had argued that man was nothing but 'a featherless biped.' To show Plato what an assumption that was, Diogenes secured the live poultry pal and had it plucked. His bravado forced Plato to amend that definition of 'man' to include 'with broad flat nails.'",
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
