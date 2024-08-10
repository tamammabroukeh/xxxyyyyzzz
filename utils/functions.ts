/* eslint-disable prettier/prettier */
export const textSlicer = (text: string, max: number = 61): string => {
  if (text.length >= max) return text.slice(0, max);
  else return text;
};
const round = (num:number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')

export const rem = (px:number) => `${round(px / 16)}rem`
// console.log(rem(16)); 1
