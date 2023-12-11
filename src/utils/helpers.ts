const shuffle = require('knuth-shuffle').knuthShuffle;
const numberList: number[] = Array.from({ length: 78 }, (_, index) => index);

export function drawCard(): number {
  const shuffledNumberList = shuffle(numberList.slice(0));
  return shuffledNumberList[0];
}