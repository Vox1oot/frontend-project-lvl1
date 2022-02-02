#!/usr/bin/env node
import startGame from '../src/index.js';
import generatorIsEven, { ruleIsEven } from '../src/games/even-game.js';

startGame(ruleIsEven, generatorIsEven);
