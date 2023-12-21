import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getRandom } from "../utils/helpers";
const shuffle = require("knuth-shuffle").knuthShuffle;
const tarot_interpretations: Array<Interpretation> = require("./interpretations.json");

const REVERSED_CHANCE = 0.4;
export const BACK_OF_CARD_NUMBER = 78;
type Card = {
  number: number;
  reversed: boolean;
};
export type Interpretation = {
  name: string;
  keywords: {
    upright: Array<string>;
    reversed: Array<string>;
  };
  description: {
    upright: string;
    reversed: string;
  };
  affirmations: {
    upright: Array<string>;
    reversed: Array<string>;
  };
};
export type DrawnInterpretation = {
  name: string;
  keywords: Array<string>;
  description: string;
  affirmation: string;
};
interface Store {
  interpretations: Array<Interpretation>;
  interpretation: DrawnInterpretation;
  card: Card;
  deck: Array<Card>;
  drawCard: () => void;
  shuffleDeck: () => void;
  back: () => void;
  getTitle: (card: Card) => string;
  getKeywords: (card: Card) => Array<string>;
  getDescription: (card: Card) => string;
  getAffirmation: (card: Card) => string;
  isCardShowing: boolean;
  isInterpretationShowing: boolean;
  showInterpretation: () => void;
}
const backCard: Card = {
  number: BACK_OF_CARD_NUMBER,
  reversed: false,
};
const emptyDrawnInterpretation = {
  name: "",
  keywords: [],
  description: "",
  affirmation: "",
};

export const useTarotStore = create<Store, [["zustand/devtools", Store]]>(
  devtools((set) => ({
    interpretation: emptyDrawnInterpretation,
    interpretations: tarot_interpretations,
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
        const drawnCard = getRandom(deck);
        const interpretation = tarot_interpretations[drawnCard.number];
        const orientation = card.reversed ? "reversed" : "upright";
        const name = `${drawnCard.reversed ? "Reversed " : ""}${
          interpretation.name
        }`;
        const affirmation = getRandom(interpretation.affirmations[orientation]);
        return {
          card: drawnCard,
          isCardShowing: true,
          interpretation: {
            name,
            keywords: interpretation.keywords[orientation],
            description: interpretation.description[orientation],
            affirmation,
          },
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
        interpretation: emptyDrawnInterpretation,
      }),
    getTitle: (card: Card) => {
      const interpretation = tarot_interpretations[card.number];
      return interpretation ? interpretation.name : "";
    },
    getKeywords: (card: Card) => {
      const orientation = card.reversed ? "reversed" : "upright";
      const interpretation = tarot_interpretations[card.number];
      if (!interpretation) {
        return [];
      }
      return interpretation.keywords[orientation];
    },
    isCardShowing: false,
    getDescription: (card: Card) => {
      const orientation = card.reversed ? "reversed" : "upright";
      const interpretation = tarot_interpretations[card.number];
      if (!interpretation) {
        return "";
      }
      return interpretation.description[orientation];
    },
    getAffirmation: (card: Card) => {
      const orientation = card.reversed ? "reversed" : "upright";
      const interpretation = tarot_interpretations[card.number];
      if (!interpretation) {
        return "";
      }
      const affirmations = interpretation.affirmations[orientation];
      return getRandom(affirmations);
    },
  })),
);
