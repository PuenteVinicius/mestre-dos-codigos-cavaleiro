import { Hero } from "@/models/marvel-api";
import { MarvelApiService } from "../marvel-api/marvel-api.service";
import HeroFactory from "./heroes.factory";

export default class HeroesService extends MarvelApiService {
  constructor() {
    super();
  }

  public async getAllHeroes(): Promise<Hero[]> {
    const heroes: Hero[] = await this.get("characters");
    return HeroFactory.randomizeCards(heroes);
  }
}
