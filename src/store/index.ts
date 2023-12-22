import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getOrientation, getRandom } from "../utils/helpers";
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
  isCardShowing: boolean;
  isInterpretationShowing: boolean;
  showInterpretation: () => void;
  getInterpretation: (number: number) => Interpretation;
}
const backCard: Card = {
  number: BACK_OF_CARD_NUMBER,
  reversed: false,
};
const emptyInterpretation = {
  name: "",
  keywords: {
    upright: [],
    reversed: [],
  },
  description: {
    upright: "",
    reversed: "",
  },
  affirmations: {
    upright: [],
    reversed: [],
  },
};
const emptyDrawnInterpretation = {
  name: "",
  keywords: [],
  description: "",
  affirmation: "",
};

export const useTarotStore = create<Store, [["zustand/devtools", Store]]>(
  devtools((set) => ({
    getInterpretation: (number: number) => {
      const interpretation = tarot_interpretations[number];
      return interpretation ? interpretation : emptyInterpretation;
    },
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
        const orientation = getOrientation(card.reversed);
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
    isCardShowing: false,
  })),
);
