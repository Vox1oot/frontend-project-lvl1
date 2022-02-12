import startGame from '../index.js';
import getRandomNumber from '../random-number.js';

export const rulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generatorIsPrime = () => {
  const question = getRandomNumber(0, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startIsPrimeGame = () => startGame(rulePrime, generatorIsPrime);

export default startIsPrimeGame;
