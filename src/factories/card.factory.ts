import Card from "@/components/card/card.interface";
import { Constants } from "@/constants";

export default class CardFactory {
  public static canInsertCard(selectedCards: Card[], newSelectedCard: Card) {
    return (
      selectedCards === [] ||
      !selectedCards.find(card => card.id === newSelectedCard.id)
    );
  }

  public static compareCards(firstCard: Card, secondCard: Card) {
    return firstCard.code === secondCard.code;
  }

  public static resetCards(selectedCards: Card[], cards: Card[]) {
    selectedCards.forEach(selectedCard => {
      cards.map(card => {
        if (card.code === selectedCard.code) card.selected = false;
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

  public static randomizeCards(cards: Card[]) {
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
