import { shallowMount } from "@vue/test-utils";
import Card from "../card.vue";
import Cards from "../../../../public/heroes.json";

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
            id: 1010354,
            name: "Adam Warlock",
            thumbnail: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
              extension: "jpg"
            },
            selected: true
          }
        });
        wrapper.vm.onCardClick();
        expect(wrapper.vm.card.selected).toBeFalsy();
      });
      it("when card selected state is false", () => {
        wrapper.setProps({
          card: {
            id: 1010354,
            name: "Adam Warlock",
            thumbnail: {
              path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
              extension: "jpg"
            },
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
          id: 1010354,
          name: "Adam Warlock",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
            extension: "jpg"
          },
          selected: true
        }
      });
      expect(wrapper.vm.cardClass === "card__button--open").toBeTruthy();
    });
    it("when card selected state is false", () => {
      wrapper.setProps({
        card: {
          id: 1010354,
          name: "Adam Warlock",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
            extension: "jpg"
          },
          selected: false
        }
      });
      expect(wrapper.vm.cardClass === "card__button--close").toBeTruthy();
    });
  });
});
