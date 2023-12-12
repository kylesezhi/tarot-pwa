import { create } from 'zustand'
const tarot_interpretations = require('./tarot_interpretations.json');

export const BACK_OF_CARD_NUMBER = 78;
type Card = {
  number: number;
  reversed: boolean;
}
interface Store {
  cardNumber: number;
  card: Card;
  setCardNumber: (cardNumber: number) => void;
  showBack: () => void;
}
const backCard: Card = {
  number: BACK_OF_CARD_NUMBER,
  reversed: false
}

export const useTarotStore = create<Store>((set) => ({
  cardNumber: BACK_OF_CARD_NUMBER,
  card: backCard,
  setCardNumber: (cardNumber: number) => set({ cardNumber }),
  showBack: () => set({ cardNumber: 78 }),
}))
