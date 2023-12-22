const getRandom = (array: Array<any>): any =>
  array[Math.floor(Math.random() * array.length)];

const parseNum = (str: string | undefined, alt: number): number => {
  if (str === undefined) {
    return alt;
  }
  try {
    const result = parseInt(str);
    return isNaN(result) ? alt : result;
  } catch (_) {
    return alt;
  }
};

export type Orientation = "upright" | "reversed";

const getOrientation = (reversed: boolean): Orientation => {
  return reversed ? "reversed" : "upright";
};

const getCardUrl = (number: number): string => {
  return `${window.location.origin}/card/${number}`;
};

export { getRandom, parseNum, getOrientation, getCardUrl };
