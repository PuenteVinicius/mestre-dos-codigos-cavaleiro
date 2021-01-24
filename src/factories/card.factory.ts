import Card from "@/components/card/card.interface";
import { Constants } from "@/constants";
import { Hero } from "@/models/marvel-api";

export default class CardFactory {
  public static heroesToCards(heroes: Hero[]): Card[] {
    const cards: Card[] = heroes.map((hero: Hero) => {
      const card: Card = {
        id: 0,
        name: "",
        selected: false,
        thumbnail: {
          extension: "",
          path: ""
        }
      };
      card.id = hero.id;
      card.name = hero.name;
      card.selected = false;
      card.thumbnail = hero.thumbnail;
      return card;
    });
    return cards;
  }
  public static canInsertCard(selectedCards: Card[], newSelectedCard: Card) {
    return (
      selectedCards === [] ||
      !selectedCards.find(card => card.id === newSelectedCard.id)
    );
  }

  public static compareCards(firstCard: Card, secondCard: Card) {
    return firstCard.id === secondCard.id;
  }

  public static resetCards(selectedCards: Card[], cards: Card[]) {
    selectedCards.forEach(selectedCard => {
      cards.map(card => {
        if (card.id === selectedCard.id) card.selected = false;
      });
    });

    return cards;
  }

  public static fillSelectedCards(selectedCards: Card[], selectedCard: Card) {
    if (this.canInsertCard(selectedCards, selectedCard))
      selectedCards.push(selectedCard);

    return selectedCards;
  }

  public static updateCards(selectedCards: Card[], cards: Card[]) {
    if (
      !this.compareCards(
        selectedCards[Constants.FIRST_CARD],
        selectedCards[Constants.SECOND_CARD]
      )
    )
      cards = this.resetCards(selectedCards, cards);

    return cards;
  }


  public static showCards(cards: Card[]): Card[] {
    cards.forEach(card => {
      card.selected = true;
    });
    return cards;
  }

  public static closeCards(cards: Card[]) {
    cards.forEach(card => {
      card.selected = false;
    });
    return cards;
  }

  public static isWinner(cards: Card[]) {
    return !cards.find(card => card.selected === false);
  }
}
