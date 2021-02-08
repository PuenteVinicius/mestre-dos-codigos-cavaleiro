import HeroFactory from "../heroes.factory";
import Heroes from "../../../../public/heroes.json";

describe("Heroes Factory", () => {
  const heroFactory = new HeroFactory();
  it("Should be a instace of HeroFactory", () => {
    const test = heroFactory instanceof HeroFactory;
    expect(test).toBeTruthy();
  });
});
