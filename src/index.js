import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { initSinglePlayer, insertNameBlock } from './gameLogicSingleplayer.js';
import { initMultiPlayer, insertNamesBlock } from './gameLogicMultiplayer.js';

const singlePlayer = document.querySelector('#single-player');
const multiPlayer = document.querySelector('#multi-player');
const chooseMode = document.querySelector('#choose-mode');

const playerNameBtn = document.querySelector('.player-name-btn');
const playerName = document.querySelector('.player-name');
const playerNameInput = document.querySelector('#player-name-input');

export const gameData = {
  playerChosenName: '',
};

singlePlayer.addEventListener(
  'click',
  () => {
    selectMode('single');
    multiPlayer.removeEventListener;
  },
  { once: true }
);
multiPlayer.addEventListener(
  'click',
  () => {
    selectMode('multi');
    singlePlayer.removeEventListener;
  },
  { once: true }
);

function selectMode(mode) {
  if (mode === 'single') {
    initSinglePlayer();
    insertNameBlock.style.display = 'flex';
    playerNameInput.focus();
    chooseMode.style.display = 'none';
    playerNameBtn.addEventListener('click', setPlayerName, { once: true });

    console.log(`${mode}player mode selected`);
  }
  if (mode === 'multi') {
    initMultiPlayer();
    insertNameBlock.style.display = 'flex';
    chooseMode.style.display = 'none';
    playerNameBtn.addEventListener('click', setPlayerName, { once: true });

    console.log(`${mode}player mode selected`);
  }
}

export function setPlayerName(e) {
  e.preventDefault();
  if (!playerNameInput.value) return;
  gameData.playerChosenName = playerNameInput.value;
  playerName.innerText = `${playerNameInput.value}:`;
  playerNameInput.value = '';
  console.log(`${gameData.playerChosenName} set as player name`);
  insertNameBlock.remove();
  document.querySelector('#game').style.display = 'flex';
}

// if (module.hot) {
//   module.hot.accept();
// }
