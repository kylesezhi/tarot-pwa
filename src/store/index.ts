import { create } from 'zustand'

export const CARD_BACK = 78;
interface Store {
  cardNumber: number;
  setCardNumber: (cardNumber: number) => void;
  showBack: () => void;
}

export const useTarotStore = create<Store>((set) => ({
  cardNumber: CARD_BACK,
  setCardNumber: (cardNumber: number) => set({ cardNumber }),
  showBack: () => set({ cardNumber: 78 }),
}))
