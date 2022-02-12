import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

export const ruleIsCalc = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

/* The function return searching value */
const getSearchingValue = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generatorCalc = () => {
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber} `;
  const correctAnswer = getSearchingValue(firstNumber, secondNumber, operator).toString();

  return [question, correctAnswer];
};

const startCalcGame = () => startGame(ruleIsCalc, generatorCalc);

export default startCalcGame;
