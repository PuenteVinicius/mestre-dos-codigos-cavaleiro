import { shallowMount } from "@vue/test-utils";
import MarvelCard from "../marvel-card.vue";
import Heroes from "../../../../public/heroes.json";

const wrapper: any = shallowMount(MarvelCard, {
  propsData: {
    card: Heroes[0]
  }
});

describe("Marvel Card", () => {
  it("verify if is a vue Component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
