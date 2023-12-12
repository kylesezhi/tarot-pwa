import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
const shuffle = require('knuth-shuffle').knuthShuffle;
// const tarot_interpretations = require('./tarot_interpretations.json');

const REVERSED_CHANCE = 0.25;
export const BACK_OF_CARD_NUMBER = 78;
type Card = {
  number: number;
  reversed: boolean;
}
interface Store {
  card: Card;
  deck: Array<Card>,
  drawCard: () => void;
  shuffleDeck: () => void;
  back: () => void;
  // TODO add whole interpretation 
  getInterpretation: () => string
}
const backCard: Card = {
  number: BACK_OF_CARD_NUMBER,
  reversed: false
}

export const useTarotStore = create<Store, [["zustand/devtools", Store]]>(
  devtools(
  (set) => ({
    card: backCard,
    deck: Array.from({ length: 78 }, (_, index) => ({number: index, reversed: false})),
    drawCard: () => set(({deck, card}) => {
      if (card.number !== BACK_OF_CARD_NUMBER) {
        return {};
      }
      return {
        card: deck[Math.floor(Math.random() * deck.length)]
      };
    }),
    shuffleDeck: () => set((state) => {
      return {
        deck: shuffle(state.deck.slice(0))
          .map((card: Card) => {
            card.reversed = Math.random() < REVERSED_CHANCE;
            return card;
          })}
    }),
    back: () => set(({card: backCard})),
    getInterpretation: () => 'hai'
  })
  )
)
