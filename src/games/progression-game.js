import getRandomNumber from '../random-number.js';

export const ruleProgression = 'What number is missing in the progression?';

const generatorProgression = () => {
  const array = [];

  let beginNumber = getRandomNumber(1, 100);
  const iteratorProgression = getRandomNumber(1, 10);

  for (let i = 0; i < 10; i += 1) {
    array.push(beginNumber += iteratorProgression);
  }

  const index = getRandomNumber(0, 9);

  const tempArray = [].concat(array);
  tempArray[index] = '..';

  const question = tempArray.join(' ');
  const correctAnswer = array[index].toString();
  return [question, correctAnswer];
};

export default generatorProgression;
