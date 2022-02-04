#!/usr/bin/env node
import startGame from '../src/index.js';
import generatorisPrime, { rulePrime } from '../src/games/prime-game.js';

startGame(rulePrime, generatorisPrime);
