import { Constants } from "@/constants";
import MarvelResponse from "@/models/marvel-api";
import md5 from "md5";
import enviroment from "../../enviroment";
export abstract class MarvelApiService {
  public get<T>(url: string): Promise<any> {
    return fetch(this.urlPath(url), {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then((response: MarvelResponse) => response.data.results);
  }

  private urlPath(url: string): string {
    return `${Constants.MARVEL_URI}/${url}?events=29&limit=100&ts=${this.ts}&apikey=${enviroment.PUBLIC_KEY}&hash=${this.hash}`;
  }

  private get ts() {
    return new Date().valueOf();
  }

  private get hash(): string {
    return md5(`${this.ts}${enviroment.PRIVATE_KEY}${enviroment.PUBLIC_KEY}`);
  }
}
