import md5 from "md5";
import enviroment from "../../enviroment";

export default class MarvelApiService {
  private MARVEL_URI = "https://gateway.marvel.com/v1/public/";

  private get ts() {
    return new Date().valueOf();
  }

  private get hash(): string {
    return md5(`${this.ts}${enviroment.PRIVATE_KEY}${enviroment.PUBLIC_KEY}`);
  }

  private mountRequestString(apiPath: string): string {
    return `${this.MARVEL_URI}/${apiPath}/ts=${this.ts}&apikey=${enviroment.PUBLIC_KEY}&hash=${this.hash}`;
  }

  private async mountRequest(apiPath: string, method: string): Promise<any> {
    return fetch(apiPath, {
      method: method
    });
  }

  public async get(apiPath: string): Promise<any> {
    return this.mountRequest(this.mountRequestString(apiPath), "GET");
  }

  public async post(apiPath: string): Promise<any> {
    return this.mountRequest(this.mountRequestString(apiPath), "POST");
  }

  public async put(apiPath: string): Promise<any> {
    return this.mountRequest(this.mountRequestString(apiPath), "PUT");
  }

  public async delete(apiPath: string): Promise<any> {
    return this.mountRequest(this.mountRequestString(apiPath), "DELETE");
  }
}
