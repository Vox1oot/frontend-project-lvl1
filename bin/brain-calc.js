#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import congratulation, { greetings, helloUser } from '../src/messages.js';

/* The Function return random integer number */
const generateRandomNumber = () => Math.floor(Math.random() * 100);

/* The Function return random operator as string */
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
      console.log(`Question: ${firstNumber} + ${secondNumber}`);
      result = firstNumber + secondNumber;
      break;
    case '-':
      console.log(`Question: ${firstNumber} - ${secondNumber}`);
      result = firstNumber - secondNumber;
      break;
    case '*':
      console.log(`Question: ${firstNumber} * ${secondNumber}`);
      result = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return result;
};

greetings();
const userName = getUserName();
helloUser(userName);

const startBrainCalc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3;) {
    const firstOperator = generateRandomNumber();
    const secondOperator = generateRandomNumber();
    const operator = getRandomOperator();
    const seacrhingvalue = getSearchingValue(firstOperator, secondOperator, operator);
    const currentAnswer = (readlineSync.question('Your answer: '));

    if (Number(currentAnswer) === seacrhingvalue) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was ${seacrhingvalue}`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === 3) {
      congratulation(userName);
    }
  }
};

startBrainCalc();

export default startBrainCalc;
