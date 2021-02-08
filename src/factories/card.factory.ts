import Card from "@/components/card/card.interface";
import { Constants } from "@/constants";
import { Hero } from "@/models/marvel-api";

export default class CardFactory {
  public static heroesToCards(heroes: Hero[]): Card[] {
    const cards: Card[] = heroes.map((hero: Hero) => {
      let card: Card = {
        id: 0,
        name: "",
        selected: false,
        thumbnail: {
          extension: "",
          path: ""
        }
      };
      card = {
        id: hero.id,
        name: hero.name,
        selected: false,
        thumbnail: {
          extension: hero.thumbnail.extension,
          path: hero.thumbnail.path
        }
      };
      return card;
    });
    return this.randomizeCards(cards);
  }

  public static compareCards(firstCard: Card, secondCard: Card) {
    return firstCard.name === secondCard.name;
  }

  public static resetCards(selectedCards: Card[], cards: Card[]) {
    selectedCards.forEach(selectedCard => {
      cards.map(card => {
        if (card.name === selectedCard.name) card.selected = false;
      });
    });

    return cards;
  }

  public static fillSelectedCards(selectedCards: Card[], selectedCard: Card) {
    if (selectedCards.length < 2) {
      selectedCards.push(selectedCard);
    }

    return selectedCards;
  }

  public static updateCards(selectedCards: Card[], cards: Card[]) {
    if (
      !this.compareCards(
        selectedCards[Constants.FIRST_CARD],
        selectedCards[Constants.SECOND_CARD]
      )
    ) {
      cards = this.resetCards(selectedCards, cards);
    }

    return cards;
  }

  public static randomizeCards(cards: any[]) {
    const randomizedCards: Card[] = [];

    while (randomizedCards.length < Constants.MAX_LENGTH) {
      cards.forEach(() => {
        const index = Math.floor(Math.random() * Constants.MAX_LENGTH);
        const card = cards[index];

        if (!randomizedCards.find(radonCard => radonCard === card))
          randomizedCards.push(cards[index]);
      });
    }
    return randomizedCards;
  }

  public static showCards(cards: any[]): Card[] {
    cards.forEach(card => {
      card.selected = true;
    });
    return cards;
  }

  public static closeCards(cards: any[]) {
    cards.forEach(card => {
      card.selected = false;
    });
    return cards;
  }

  public static isWinner(cards: Card[]) {
    return !cards.find(card => card.selected === false);
  }
}
