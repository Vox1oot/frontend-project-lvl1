#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import congratulation, { greetings, helloUser } from '../src/messages.js';

/* Function return random integer number */
const generateRandomNumber = () => Math.floor(Math.random() * 100);

/* greetings user */
greetings();

/* user name */
const userName = getUserName();

helloUser(userName);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const startBrainEven = () => {
  for (let i = 0; i < 3;) {
    const checkingNumber = generateRandomNumber();
    console.log(`Question: ${checkingNumber}`);
    const userAnswer = readlineSync.question('Your answer? ').toLowerCase();
    if (checkingNumber % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      i += 1;
    } else if (checkingNumber % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
      i += 1;
    } else {
      const currentAnswer = checkingNumber % 2 === 0 ? 'yes' : 'no';
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
