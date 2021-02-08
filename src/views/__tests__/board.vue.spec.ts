import CardFactory from "@/factories/card.factory";
import { shallowMount } from "@vue/test-utils";
import Board from "../board.vue";
import { Constants } from "../../constants";
import Cards from "../../../public/heroes.json";

const $router = {
  currentRoute: {
    params: {
      userName: ""
    }
  }
};

const wrapper: any = shallowMount(Board, {
  mocks: {
    $router,
    Constants
  }
});
CardFactory.compareCards = jest.fn();

describe("Board", () => {

  it("verify if is a vue Component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("[updateBoard] - tests when the correct function is called", () => {
    it("when selectedcards.lenght === Constants.CARDS_PEER_TRIE", () => {
      const spy = jest.spyOn(wrapper.vm, "makeAtrie");
      wrapper.vm.updateBoard(Cards[0]);
      expect(spy).toHaveBeenCalledTimes(0);
    });

    it("when selectedcards.lenght !== Constants.CARDS_PEER_TRIE", () => {
      const spy = jest.spyOn(wrapper.vm, "makeAtrie");
      wrapper.vm.updateBoard(Cards[0]);
      wrapper.vm.updateBoard(Cards[1]);
      expect(spy).toHaveBeenCalled();
    });
  });
});
