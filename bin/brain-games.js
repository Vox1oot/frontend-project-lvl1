#!/usr/bin/env node
import getUserName, { greetings } from '../src/cli.js';

greetings();
const userName = getUserName();
console.log(`Hello, ${userName}!`);
