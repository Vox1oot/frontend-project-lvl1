/* The function generate ranodm number from 0 to 100 */
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export default getRandomNumber;
