import { shallowMount } from "@vue/test-utils";
import Card from "../card.vue";
import Cards from "../../../public/cards.json";

const wrapper: any = shallowMount(Card, {
  propsData: {
    card: Cards[0]
  }
});

describe("Card", () => {
  it("verify if is a vue Component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("[onCardClick] - Should call sendCards method", () => {
    it("should call sendCards Method ", () => {
      const spy = jest.spyOn(wrapper.vm, "sendCards");
      wrapper.vm.onCardClick();
      expect(spy).toHaveBeenCalled();
    });

    describe("should deny selected state", () => {
      it("when card selected state is true", () => {
        wrapper.setProps({
          card: {
            id: 1,
            code: "JS",
            name: "Javascript",
            svgPath: "https://svgshare.com/i/J3t.svg",
            selected: true
          }
        });
        wrapper.vm.onCardClick();
        expect(wrapper.vm.card.selected).toBeFalsy();
      });
      it("when card selected state is false", () => {
        wrapper.setProps({
          card: {
            id: 1,
            code: "JS",
            name: "Javascript",
            svgPath: "https://svgshare.com/i/J3t.svg",
            selected: false
          }
        });
        wrapper.vm.onCardClick();
        expect(wrapper.vm.card.selected).toBeTruthy();
      });
    });
  });

  describe("[sendCards] - Should call sendCards method", () => {
    it("should emmit 'cardSelected' evvent", () => {
      wrapper.vm.sendCards();

      setTimeout(() => {
        expect(wrapper.emitted("cardSelected")).toBeTruthy();
      }, 1000);
    });
  });

  describe("[cardClass] - should return de correct class", () => {
    it("when card selected state is true", () => {
      wrapper.setProps({
        card: {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: true
        }
      });
      expect(wrapper.vm.cardClass === "card__button--open").toBeTruthy();
    });
    it("when card selected state is false", () => {
      wrapper.setProps({
        card: {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        }
      });
      expect(wrapper.vm.cardClass === "card__button--close").toBeTruthy();
    });
  });
});
