/* The function generate a random number in the range from min to max */
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export default getRandomNumber;
