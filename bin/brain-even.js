#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import congratulation, { greetings, helloUser } from '../src/messages.js';

/* Function return random integer number */
const generateRandomNumber = () => Math.floor(Math.random() * 100);

const isCorrect = (num, answer) => {
  let result;

  if (num % 2 === 0 && answer === 'yes') {
    result = true;
  } else if (num % 2 !== 0 && answer === 'no') {
    result = true;
  } else {
    result = false;
  }
  return result;
};

/* greetings user */
greetings();

/* user name */
const userName = getUserName();

helloUser(userName);

const startBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3;) {
    const checkingNumber = generateRandomNumber();
    console.log(`Question: ${checkingNumber}`);

    const userAnswer = readlineSync.question('Your answer? ').toLowerCase();
    const result = isCorrect(checkingNumber, userAnswer);
    const currentAnswer = checkingNumber % 2 === 0 ? 'yes' : 'no';

    if (result) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'`);
      console.log(`Let's try again, ${userName} !`);
      break;
    }
    if (i === 3) {
      congratulation(userName);
    }
  }
};

startBrainEven();

export default startBrainEven;
