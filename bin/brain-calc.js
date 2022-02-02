#!/usr/bin/env node
import startGame from '../src/index.js';
import generatorCalc, { ruleIsCalc } from '../src/games/calc-game.js';

startGame(ruleIsCalc, generatorCalc);
