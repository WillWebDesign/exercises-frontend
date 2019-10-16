import '../styles/app.scss';

import { RockPaperScissors } from './rock-paper-scissors';

const rockPaperScissors: RockPaperScissors = new RockPaperScissors();

const optionsButtons = document.querySelectorAll('.option');
const resultEl = document.getElementById('result');
const cpuMoveEl = document.getElementById('cpuMove');
const userMoveEl = document.getElementById('userMove');
const animationCont = document.getElementById('panelMoves');

rockPaperScissors.startGame(optionsButtons, resultEl, cpuMoveEl, userMoveEl, animationCont);
