import readlineSync from 'readline-sync';

/* Create the main logic barin-game */

const startGame = (rules, getRaundData) => {
  const numberOfRounds = 3;

  console.log('Welcome to the Brain Games! ');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  /* show the current rule game */
  console.log(rules);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getRaundData();
    console.log(`Question: ${question}`);

    const userResponse = readlineSync.question('Your answer? ');

    if (userResponse === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
