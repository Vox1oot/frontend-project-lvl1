import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

export const ruleProgression = 'What number is missing in the progression?';

/* this function return a numerical progression */
const buildProgression = (initialNumber, stepProgression, progressionLenght) => {
  const numbers = [];

  for (let i = 0; i < progressionLenght; i += 1) {
    const currentNumber = initialNumber + (i * stepProgression);
    numbers.push(currentNumber);
  }

  return numbers;
};

const generatorProgression = () => {
  const initialNumber = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(1, 10);
  const progressionLenght = getRandomNumber(5, 10); //  recomended use range from 5 to 10
  const progressionNumbers = buildProgression(initialNumber, stepProgression, progressionLenght);

  const index = getRandomNumber(0, progressionLenght - 1);

  const tempArray = [...progressionNumbers];
  tempArray[index] = '..';

  const question = tempArray.join(' ');
  const correctAnswer = progressionNumbers[index].toString();

  return [question, correctAnswer];
};

const startProgressionGame = () => startGame(ruleProgression, generatorProgression);

export default startProgressionGame;
