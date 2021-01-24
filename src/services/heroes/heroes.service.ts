import { Heroes } from "@/models/marvel-api";
import { MarvelApiService } from "../marvel-api/marvel-api.service";

export default class HeroesService extends MarvelApiService {
  public async getAllCards() {
    const heroes: Heroes[] = await this.get("characters");
  }
}
