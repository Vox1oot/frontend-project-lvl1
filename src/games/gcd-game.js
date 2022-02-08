import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

export const ruleGCD = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let firstNumber = a;
  let secondBUmber = b;

  while (firstNumber !== 0 && secondBUmber !== 0) {
    if (firstNumber > secondBUmber) {
      firstNumber %= secondBUmber;
    } else {
      secondBUmber %= firstNumber;
    }
  }

  return firstNumber + secondBUmber;
};

const generatorGCD = () => {
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

const startGCDGame = () => startGame(ruleGCD, generatorGCD);

export default startGCDGame;
