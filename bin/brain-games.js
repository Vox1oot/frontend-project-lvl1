#!/usr/bin/env node
import getUserName from '../src/cli.js';
import { greetings } from '../src/messages.js';

greetings();
const userName = getUserName();
console.log(`Hello, ${userName}!`);
