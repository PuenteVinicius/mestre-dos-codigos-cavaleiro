import HeroesService from "../heroes.service";
import Heroes from "../../../../public/heroes.json";

describe("Heroes Factory", () => {
  const heroService = new HeroesService();
  it("Should be a instace of HeroService", () => {
    const test = heroService instanceof HeroesService;
    expect(test).toBeTruthy();
  });
});
