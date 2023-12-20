import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getRandom } from "../utils/helpers";
const shuffle = require("knuth-shuffle").knuthShuffle;
const tarot_interpretations = require("./interpretations.json");

const REVERSED_CHANCE = 0.4;
export const BACK_OF_CARD_NUMBER = 78;
type Card = {
  number: number;
  reversed: boolean;
};
interface Store {
  card: Card;
  deck: Array<Card>;
  drawCard: () => void;
  shuffleDeck: () => void;
  back: () => void;
  getTitle: () => string;
  getKeywords: () => Array<string>;
  getDescription: () => string;
  getAffirmation: () => string;
  isCardShowing: boolean;
  isInterpretationShowing: boolean;
  showInterpretation: () => void;
}
const backCard: Card = {
  number: BACK_OF_CARD_NUMBER,
  reversed: false,
};

export const useTarotStore = create<Store, [["zustand/devtools", Store]]>(
  devtools((set, get) => ({
    isInterpretationShowing: false,
    showInterpretation: () => set({ isInterpretationShowing: true }),
    card: backCard,
    deck: Array.from({ length: 78 }, (_, index) => ({
      number: index,
      reversed: false,
    })),
    drawCard: () =>
      set(({ deck, card }) => {
        if (card.number !== BACK_OF_CARD_NUMBER) {
          return {};
        }
        return {
          card: getRandom(deck),
          isCardShowing: true,
        };
      }),
    shuffleDeck: () =>
      set((state) => {
        return {
          deck: shuffle(state.deck.slice(0)).map((card: Card) => {
            card.reversed = Math.random() < REVERSED_CHANCE;
            return card;
          }),
        };
      }),
    back: () =>
      set({
        card: backCard,
        isCardShowing: false,
        isInterpretationShowing: false,
      }),
    getTitle: () => {
      const interpretation = tarot_interpretations[get().card.number];
      return interpretation ? interpretation.name : "";
    },
    getKeywords: () => {
      const card = get().card;
      const orientation = card.reversed ? "reversed" : "upright";
      const interpretation = tarot_interpretations[card.number];
      if (!interpretation) {
        return [];
      }
      return interpretation.keywords[orientation];
    },
    isCardShowing: false,
    getDescription: () => {
      const card = get().card;
      const orientation = card.reversed ? "reversed" : "upright";
      const interpretation = tarot_interpretations[card.number];
      if (!interpretation) {
        return [];
      }
      return interpretation.description[orientation];
    },
    getAffirmation: () => {
      const card = get().card;
      const orientation = card.reversed ? "reversed" : "upright";
      const interpretation = tarot_interpretations[card.number];
      if (!interpretation) {
        return [];
      }
      const affirmations = interpretation.affirmations[orientation];
      return affirmations[Math.floor(Math.random() * affirmations.length)];
    },
  })),
);
