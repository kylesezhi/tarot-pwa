import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getRandom } from "../utils/helpers";
import {
  BACK_OF_CARD_NUMBER,
  Card,
  Interpretation,
  REVERSED_CHANCE,
  Store,
  backCard,
  emptyDrawnInterpretation,
  emptyInterpretation,
} from "./types";
const shuffle = require("knuth-shuffle").knuthShuffle;
const tarot_interpretations: Array<Interpretation> = require("./interpretations.json");

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
      orientation: "upright",
    })),
    drawCard: () =>
      set(({ deck, card }) => {
        if (card.number !== BACK_OF_CARD_NUMBER) {
          return {};
        }
        const drawnCard = getRandom(deck);
        const interpretation = tarot_interpretations[drawnCard.number];
        const name = `${
          drawnCard.orientation === "reversed" ? "Reversed " : ""
        }${interpretation.name}`;
        const affirmation = getRandom(
          interpretation.affirmations[card.orientation],
        );
        return {
          card: drawnCard,
          isCardShowing: true,
          interpretation: {
            name,
            keywords: interpretation.keywords[card.orientation],
            description: interpretation.description[card.orientation],
            affirmation,
            orientation: card.orientation,
          },
        };
      }),
    shuffleDeck: () =>
      set((state) => {
        return {
          deck: shuffle(state.deck.slice(0)).map((card: Card) => {
            const reversed = Math.random() < REVERSED_CHANCE;
            card.orientation = reversed ? "reversed" : "upright";
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