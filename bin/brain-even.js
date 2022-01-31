#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as user from './brain-games.js';

/* Function return random integer number */
const generateRandomNumber = () => Math.floor(Math.random() * 100);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
    const correntAnswer = checkingNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correntAnswer}'`);
    console.log(`Let's try again, ${user.userName} !`);
    break;
  }

  if (i === 3) {
    console.log(`Congratulations, ${user.userName} !`);
  }
}
