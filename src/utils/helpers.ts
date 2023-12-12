const shuffle = require('knuth-shuffle').knuthShuffle;
const numberList: number[] = Array.from({ length: 78 }, (_, index) => index);
const shuffledNumberList = shuffle(numberList);

export function drawCard({reversedChance = 0.5, deck = shuffledNumberList} = {}) {
  let chosenCard;

  if (deck.length <= 0) return;
  chosenCard = deck[Math.floor(Math.random() * deck.length)];
  // chosenCard.reversed = Math.random() < reversedChance;
  return chosenCard;
};