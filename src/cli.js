import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');
export const greetings = () => console.log('Welcome to the Brain Games! ');

export default getUserName;
