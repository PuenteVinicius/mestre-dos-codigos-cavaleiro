import { shallowMount } from "@vue/test-utils";
import Tries from "../tries.vue";

const mockTries = 20;
const wrapper = shallowMount(Tries, {
  propsData: {
    tries: mockTries
  }
});

describe("Ranking", () => {
  it("verify if is a vue Component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("Should return the correct text from HTML", () => {
    it('When class is equal to ".tries__title"', () => {
      expect(wrapper.find(".tries__title").text()).toEqual("Tries");
    });

    it('When class is equal to ".tries__text" should be equal to mockTires Variable', () => {
      wrapper.setProps({ propsData: { tries: 20 } });
      expect(wrapper.find(".tries__text").text()).toEqual(mockTries.toString());
    });
  });
});
