import { Orientation } from "../store/types";

const getRandom = (array: Array<any>): any =>
  array[Math.floor(Math.random() * array.length)];

const parseOrientation = (param: string | undefined): Orientation => {
  if (param !== "reversed") {
    return "upright";
  }
  return "reversed";
};

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

const getCardUrl = (number: number): string => {
  return `${window.location.origin}/cards/${number}`;
};

export { getRandom, parseNum, getCardUrl, parseOrientation };
