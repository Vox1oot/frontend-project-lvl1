import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

export const ruleIsEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0; /* return true ot false */

const generatorIsEven = () => {
  const currentNumber = getRandomNumber(0, 50);
  const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';

  return [currentNumber, correctAnswer];
};

const startEvenGame = () => startGame(ruleIsEven, generatorIsEven);

export default startEvenGame;
