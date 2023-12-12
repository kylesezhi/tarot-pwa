const shuffle = require('knuth-shuffle').knuthShuffle;
const numberList: number[] = Array.from({ length: 78 }, (_, index) => index);
const tarot_interpretations = require('./tarot_interpretations.json');
const shuffledNumberList = shuffle(numberList);

export function drawCard({reversedChance = 0.5, deck = shuffledNumberList} = {}) {
  let chosenCard;

  if (deck.length <= 0) return;
  chosenCard = deck[Math.floor(Math.random() * deck.length)];
  // chosenCard.reversed = Math.random() < reversedChance;
  return chosenCard;
};
// export function drawCard(): number {
//   return shuffledNumberList[0];
// }

export function getCardName(cardNumber: number): string {
  return tarot_interpretations[cardNumber].name;
}