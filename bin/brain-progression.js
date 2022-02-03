#!/usr/bin/env node
import startGame from '../src/index.js';
import generatorProgression, { ruleProgression } from '../src/games/progression-game.js';

startGame(ruleProgression, generatorProgression);
