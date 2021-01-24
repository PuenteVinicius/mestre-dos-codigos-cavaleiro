import puzzleCards from "../../public/cards.json";
import Card from "@/components/card/card.interface";
import CardFactory from "./card.factory";

describe("Card Factory", () => {
  const cardFactory = CardFactory;

  describe("[canInsertCard] - Tests if a card should be inserted on the board", () => {
    let selectedCards: Card[];
    let newSelectedCard: Card;

    it("When selectedCard exist and selectedCards is qual to []", () => {
      selectedCards = [];
      newSelectedCard = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      };
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(
        true
      );
    });

    it("When selectedCard do not exist inside selectedCards", () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        }
      ];
      newSelectedCard = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      };
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(
        true
      );
    });

    it("When selectedCard exist inside selectedCards", () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        }
      ];
      newSelectedCard = {
        id: 2,
        code: "PY",
        name: "Python",
        svgPath: "https://svgshare.com/i/J2M.svg",
        selected: false
      };
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(
        false
      );
    });

    it("When selectedCard exist inside selectedCards", () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        }
      ];
      newSelectedCard = {
        id: 2,
        code: "PY",
        name: "Python",
        svgPath: "https://svgshare.com/i/J2M.svg",
        selected: false
      };
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(
        false
      );
    });

    it("When selectedCard exist inside selectedCards twice", () => {
      selectedCards = [
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 12,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        }
      ];
      const newSelectedCard = {
        id: 2,
        code: "PY",
        name: "Python",
        svgPath: "https://svgshare.com/i/J2M.svg",
        selected: false
      };
      expect(cardFactory.canInsertCard(selectedCards, newSelectedCard)).toBe(
        false
      );
    });
  });

  describe("[compareCards] - Compare equalitty betwwen two cards", () => {
    let firstCard: Card;
    let secondCard: Card;

    it("should return true if cards are equal ", () => {
      firstCard = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      };
      secondCard = {
        id: 11,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      };
      expect(cardFactory.compareCards(firstCard, secondCard)).toBe(true);
    });

    it("should return false if cards are not equal ", () => {
      firstCard = {
        id: 9,
        code: "RB",
        name: "Ruby",
        svgPath: "https://svgshare.com/i/J1e.svg",
        selected: false
      };
      secondCard = {
        id: 13,
        code: "HTML",
        name: "HTML",
        svgPath: "https://svgshare.com/i/J3G.svg",
        selected: false
      };
      expect(cardFactory.compareCards(firstCard, secondCard)).toBe(false);
    });
  });

  describe("[resetCards] - should set selected porperty of equal cards inside selected cards to false", () => {
    let selectedCards: Card[];
    let cards: Card[];
    it("When both cards of cards inside cards are true", () => {
      cards = [
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: true
        },
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: true
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        },
        {
          id: 4,
          code: "CSS",
          name: "CSS",
          svgPath: "https://svgshare.com/i/J2P.svg",
          selected: false
        }
      ];

      selectedCards = [
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        },
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        }
      ];

      expect(cardFactory.resetCards(selectedCards, cards)).toEqual([
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        },
        {
          id: 2,
          code: "PY",
          name: "Python",
          svgPath: "https://svgshare.com/i/J2M.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        },
        {
          id: 4,
          code: "CSS",
          name: "CSS",
          svgPath: "https://svgshare.com/i/J2P.svg",
          selected: false
        }
      ]);
    });
  });

  describe("[fillSelectedCards] - Insert selected cards on the temp array", () => {
    let cardSelected: Card;
    let cardsSelected: Card[];

    it("When selected cards is equal to === []", () => {
      cardSelected = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      };
      cardsSelected = [];
      expect(
        cardFactory.fillSelectedCards(cardsSelected, cardSelected)
      ).toEqual([
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        }
      ]);
    });

    it("when selected card is already inserted into selected cards", () => {
      cardSelected = {
        id: 1,
        code: "JS",
        name: "Javascript",
        svgPath: "https://svgshare.com/i/J3t.svg",
        selected: false
      };
      cardsSelected = [];
      cardsSelected.push(cardSelected);
      expect(
        cardFactory.fillSelectedCards(cardsSelected, cardSelected)
      ).toEqual([
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        }
      ]);
    });

    it("when selected card is not already inserted into selected cards", () => {
      cardSelected = {
        id: 3,
        code: "HTML",
        name: "HTML",
        svgPath: "https://svgshare.com/i/J3G.svg",
        selected: false
      };
      cardsSelected = [
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        }
      ];
      cardsSelected.push(cardSelected);
      expect(
        cardFactory.fillSelectedCards(cardsSelected, cardSelected)
      ).toEqual([
        {
          id: 1,
          code: "JS",
          name: "Javascript",
          svgPath: "https://svgshare.com/i/J3t.svg",
          selected: false
        },
        {
          id: 3,
          code: "HTML",
          name: "HTML",
          svgPath: "https://svgshare.com/i/J3G.svg",
          selected: false
        }
      ]);
    });
  });

  describe("[updateCards] - Test if selected cards should be cleaned", () => {
    let cards: Card[] = puzzleCards;
    let selectedCards: Card[];

    it("When cards inside selected cards are equals", () => {
      selectedCards = [];

      cards[0].selected = true;
      cards[10].selected = true;

      selectedCards.push(cards[0]);
      selectedCards.push(cards[10]);

      cards = cardFactory.updateCards(selectedCards, cards);
      expect(cards[0].selected && cards[10].selected).toEqual(true);
    });
    it("When cards inside selected cards are not equals", () => {
      selectedCards = [];

      cards[0].selected = true;
      cards[1].selected = true;

      selectedCards.push(cards[0]);
      selectedCards.push(cards[1]);

      cards = cardFactory.updateCards(selectedCards, cards);
      expect(cards[0].selected && cards[1].selected).toEqual(false);
    });
  });

  describe("[randomizeCards] - it should Radom cards", () => {
    it("should return a diferente array of cards", () => {
      const cards: Card[] = cardFactory.randomizeCards(puzzleCards);
      expect(cards).not.toEqual(puzzleCards);
    });
  });

  describe("[showCards] - Show cards", () => {
    it("should set all selected properties to true", () => {
      let isThereAfalse = false;
      const cards: Card[] = cardFactory.showCards(puzzleCards);
      cards.forEach(card => {
        isThereAfalse = card.selected === false;
      });
      expect(isThereAfalse).toBe(false);
    });
  });

  describe("[closeCards] - Close cards", () => {
    it("should set all selected properties to true", () => {
      let isThereATrue = false;
      const cards: Card[] = cardFactory.closeCards(puzzleCards);
      cards.forEach(card => {
        isThereATrue = card.selected === true;
      });
      expect(isThereATrue).toBe(false);
    });
  });

  describe("[isWinner] - Testes if the user won the game", () => {
    it("all selected properties should be true", () => {
      let isThereAfalse = false;
      const cards: Card[] = cardFactory.showCards(puzzleCards);
      cards.forEach(card => {
        isThereAfalse = card.selected === false;
      });
      expect(isThereAfalse).toBe(false);
    });
  });
});
