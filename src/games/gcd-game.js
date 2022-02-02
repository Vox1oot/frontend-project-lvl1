import getRandomNumber from '../random-number.js';

export const ruleGCD = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a + b;
};

const generatorGCD = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

export default generatorGCD;
