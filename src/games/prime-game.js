import getRandomNumber from '../random-number.js';

export const rulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const result = true;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return result;
};

const generatorIsPrime = () => {
  const question = getRandomNumber(3, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default generatorIsPrime;
