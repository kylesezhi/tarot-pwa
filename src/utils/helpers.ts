const shuffle = require('knuth-shuffle').knuthShuffle;
const numberList: number[] = Array.from({ length: 78 }, (_, index) => index);
const tarot_interpretations = require('./tarot_interpretations.json');

export function drawCard(): number {
  const shuffledNumberList = shuffle(numberList.slice(0));
  return shuffledNumberList[0];
}

export function getCardName(cardNumber: number): string {
  return tarot_interpretations[cardNumber].name;
}