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

export { getRandom, parseNum };
