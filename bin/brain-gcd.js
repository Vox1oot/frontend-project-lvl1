#!/usr/bin/env node
import startGame from '../src/index.js';
import generatorGCD, { ruleGCD } from '../src/games/gcd-game.js';

startGame(ruleGCD, generatorGCD);
