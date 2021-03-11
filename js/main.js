'use strict';
const MAX_LENGTH = 140;

const getRandomInt = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  // * Another solution
  // const min = Math.ceil((a < b) ? a : b);
  // const max = Math.floor((a >= b) ? a : b);

  if (min < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomInt(1, -15);

const checkStringLength = (string, MAX_LENGTH) => string.length <= MAX_LENGTH;

let hello = 'Добрый день!';
let idioms = 'It’s always darkest before the dawn; It takes two to tango; Through thick and thin; You can lead a horse to water, but you can’t make him drink';


checkStringLength(idioms, MAX_LENGTH);
checkStringLength(hello, MAX_LENGTH);
