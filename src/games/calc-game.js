import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

/* The function return random operator */
const getRandomOperator = () => {
  const arr = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);

  return arr[index];
};

/* The function return searching value */
const getSearchingValue = (firstNumber, secondNumber, operator) => {
  let result;

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return result;
};

export const ruleIsCalc = 'What is the result of the expression?';

const generatorCalc = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber} `;
  const correctAnswer = getSearchingValue(firstNumber, secondNumber, operator).toString();
  return [question, correctAnswer];
};

startGame(ruleIsCalc, generatorCalc);

export default generatorCalc;
