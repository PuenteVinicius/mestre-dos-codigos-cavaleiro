import { shallowMount } from "@vue/test-utils";
import Ranking from "../ranking.vue";
import UserMock from "../user/user.mocks.json";
import User from "../user/user.entity";

const userMocks = UserMock;

const firstCaseArr: User[] = [];
userMocks.firstCase.forEach(user => {
  firstCaseArr.push(new User(user.userTries, user.userName));
});

const wrapper = shallowMount(Ranking, {
  propsData: {
    rankingList: firstCaseArr
  }
});

describe("Ranking", () => {
  it("verify if is a vue Component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("Should have first case names and tries", () => {
    it('should have "Vinicius"string"', () => {
      expect(wrapper.find("#name-list").text()).toEqual("Vinicius");
    });

    it("should have 20 tries", () => {
      expect(wrapper.find("#try-list").text()).toEqual("20");
    });
  });

  describe("Should return the correct text from HTML", () => {
    it('When clas is ".ranking__title"', () => {
      expect(wrapper.find(".ranking__title").text()).toEqual("Ranking");
    });

    it("When id is name", () => {
      expect(wrapper.find("#name").text()).toEqual("Name");
    });

    it("When id is try", () => {
      expect(wrapper.find("#try").text()).toEqual("Tries");
    });
  });
});
