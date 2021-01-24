import { Constants } from "@/constants";
import { Hero } from "@/models/marvel-api";

export default class HeroFactory {
  public static randomizeCards(heroes: Hero[]): Hero[] {
    const randonNumbers: number[] = this.createRandomNubers(heroes.length);

    const randomizedCards: Hero[] = randonNumbers.map((elem: number) => {
      return heroes[elem];
    });

    return randomizedCards;
  }

  private static createRandomNubers(max: number): number[] {
    const randomArray: number[] = [];

    for (let index = 0; index < Constants.MAX_LENGTH; index++) {
      randomArray.push(this.getRandomArbitrary(0, max));
    }

    return this.shuffle(randomArray);
  }

  private static getRandomArbitrary(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private static shuffle(arr: number[]): number[] {
    let random: number;
    for (let i = 0; arr.length, i--; ) {
      random = arr.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
      arr.push(random);
    }
    return arr;
  }
}
