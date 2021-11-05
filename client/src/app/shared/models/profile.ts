export class Profile {
  public content!: string;

  constructor(public name: string, public role: string, public image: string, content: string) {
    this.content = content;
  }
}
