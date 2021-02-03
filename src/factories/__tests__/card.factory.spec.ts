import puzzleCards from "../../../public/heroes.json";
import Card from "@/components/card/card.interface";
import CardFactory from "../card.factory";

describe("Card Factory", () => {
  const cardFactory = CardFactory;

  describe("[compareCards] - Compare equalitty betwwen two cards", () => {
    let firstCard: Card;
    let secondCard: Card;

    it("should return true if cards are equal ", () => {
      firstCard = {
        id: 1010370,
        name: "Alpha Flight",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
          extension: "jpg"
        },
        selected: false
      };
      secondCard = {
        id: 1010370,
        name: "Alpha Flight",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
          extension: "jpg"
        },
        selected: false
      };
      expect(cardFactory.compareCards(firstCard, secondCard)).toBe(true);
    });

    it("should return false if cards are not equal ", () => {
      firstCard = {
        id: 1010370,
        name: "Alpha Flight",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
          extension: "jpg"
        },
        selected: false
      };
      secondCard = {
        id: 1010354,
        name: "Adam Warlock",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
          extension: "jpg"
        },
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
          id: 1010354,
          name: "Adam Warlock",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
            extension: "jpg"
          },
          selected: true
        },
        {
          id: 1010370,
          name: "Alpha Flight",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
            extension: "jpg"
          },
          selected: true
        },
        {
          id: 1009152,
          name: "Ancient One",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
            extension: "jpg"
          },
          selected: false
        },
        {
          id: 1009159,
          name: "Archangel",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/8/03/526165ed93180",
            extension: "jpg"
          },
          selected: false
        }
      ];

      selectedCards = [
        {
          id: 1009152,
          name: "Ancient One",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
            extension: "jpg"
          },
          selected: false
        },
        {
          id: 1009159,
          name: "Archangel",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/8/03/526165ed93180",
            extension: "jpg"
          },
          selected: false
        }
      ];

      expect(cardFactory.resetCards(selectedCards, cards)).toEqual([
        {
          id: 1010354,
          name: "Adam Warlock",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
            extension: "jpg"
          },
          selected: false
        },
        {
          id: 1010370,
          name: "Alpha Flight",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
            extension: "jpg"
          },
          selected: false
        },
        {
          id: 1009152,
          name: "Ancient One",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
            extension: "jpg"
          },
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
        id: 1009152,
        name: "Ancient One",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
          extension: "jpg"
        },
        selected: false
      };
      cardsSelected = [];
      expect(
        cardFactory.fillSelectedCards(cardsSelected, cardSelected)
      ).toEqual([
        {
          id: 1009152,
          name: "Ancient One",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
            extension: "jpg"
          },
          selected: false
        }
      ]);
    });

    it("when selected card is already inserted into selected cards", () => {
      cardSelected = {
        id: 1009152,
        name: "Ancient One",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
          extension: "jpg"
        },
        selected: false
      };
      cardsSelected = [];
      cardsSelected.push(cardSelected);
      expect(
        cardFactory.fillSelectedCards(cardsSelected, cardSelected)
      ).toEqual([
        {
          id: 1009152,
          name: "Ancient One",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
            extension: "jpg"
          },
          selected: false
        }
      ]);
    });

    it("when selected card is not already inserted into selected cards", () => {
      cardSelected = {
        id: 1010370,
        name: "Alpha Flight",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
          extension: "jpg"
        },
        selected: false
      };
      cardsSelected = [
        {
          id: 1009152,
          name: "Ancient One",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
            extension: "jpg"
          },
          selected: false
        }
      ];
      cardsSelected.push(cardSelected);
      expect(
        cardFactory.fillSelectedCards(cardsSelected, cardSelected)
      ).toEqual([
        {
          id: 1009159,
          name: "Archangel",
          description: "",
          modified: "2013-10-18T12:48:24-0400",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/8/03/526165ed93180",
            extension: "jpg"
          },
          selected: false
        },
        {
          id: 1009152,
          name: "Ancient One",
          description: "",
          modified: "1969-12-31T19:00:00-0500",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
            extension: "jpg"
          },
          selected: false
        }
      ]);
    });
  });

  describe("[updateCards] - Test if selected cards should be cleaned", () => {
    let cards: any[] = puzzleCards;
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
