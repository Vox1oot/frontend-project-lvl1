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

greetings();
const userName = getUserName();
helloUser(userName);

const startBrainCalc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3;) {
    const firstOperator = generateRandomNumber();
    const secondOperator = generateRandomNumber();
    const operator = getRandomOperator();
    let result = 0;

    switch (operator) {
      case '+':
        console.log(`Question: ${firstOperator} + ${secondOperator}`);
        result = firstOperator + secondOperator;
        break;
      case '-':
        console.log(`Question: ${firstOperator} - ${secondOperator}`);
        result = firstOperator - secondOperator;
        break;
      case '*':
        console.log(`Question: ${firstOperator} * ${secondOperator}`);
        result = firstOperator * secondOperator;
        break;
      default:
        break;
    }

    const currentAnswer = (readlineSync.question('Your answer: '));

    if (Number(currentAnswer) === result) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was ${result}`);
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
