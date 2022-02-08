import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

export const ruleProgression = 'What number is missing in the progression?';

const buildProgression = () => {
  const numbers = [];

  let beginNumber = getRandomNumber(1, 100);
  const iteratorProgression = getRandomNumber(1, 10);

  for (let i = 0; i < 10; i += 1) {
    numbers.push(beginNumber += iteratorProgression);
  }

  return numbers;
};

const generatorProgression = () => {
  const progressionNumbers = buildProgression();

  const index = getRandomNumber(0, 9);

  const tempArray = [].concat(progressionNumbers);
  tempArray[index] = '..';

  const question = tempArray.join(' ');
  const correctAnswer = progressionNumbers[index].toString();

  return [question, correctAnswer];
};

const startProgressionGame = () => startGame(ruleProgression, generatorProgression);

export default startProgressionGame;
