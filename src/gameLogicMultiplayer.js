import { gameData } from './index.js';
import { countDown } from './helpers.js';

countDown();
export const insertNamesBlock = document.querySelector('.insert-name-block');

export function initMultiPlayer() {
  let inputPlayer1;
  let inputPlayer2;

  document.addEventListener('keydown', (e) => {
    const allowedKeys = ['1', '2', '3', '8', '9', '0'];
    if (!allowedKeys.includes(e.key)) return;

    console.log(`${e.key} pressed`);
    console.log(inputPlayer1, inputPlayer2);
    if (inputPlayer1 && inputPlayer2) {
      evaluateValues();
      console.log(`already set to ${inputPlayer1} and ${inputPlayer2}`);
      return;
    }
    switch (e.key) {
      case '1':
        if (!inputPlayer1) {
          return (inputPlayer1 = 'rock');
        }
        break;
      case '2':
        if (!inputPlayer1) {
          return (inputPlayer1 = 'paper');
        }
        break;
      case '3':
        if (!inputPlayer1) {
          return (inputPlayer1 = 'scissors');
        }
        break;
      case '8':
        if (!inputPlayer2) {
          return (inputPlayer2 = 'rock');
        }
        break;
      case '9':
        if (!inputPlayer2) {
          return (inputPlayer2 = 'paper');
        }
        break;
      case '0':
        if (!inputPlayer2) {
          return (inputPlayer2 = 'scissors');
        }
        break;
      default:
        break;
    }
  });
  // let playerCount = document.querySelector('.player-count');
  // let computerCount = document.querySelector('.computer-count');

  // let player1Points = 0;
  // let player2Points = 0;

  // Game Logic
  function evaluateValues(inputPlayer1, inputPlayer2) {
    let gameMessage;

    if (inputPlayer1 === inputPlayer2) {
      gameMessage = "You've played a tie against me. Keep trying!";
      console.log(gameMessage);
      return;
    }

    if (
      (inputPlayer1 === 'rock' && inputPlayer2 === 'paper') ||
      (inputPlayer1 === 'paper' && inputPlayer2 === 'scissors') ||
      (inputPlayer1 === 'scissors' && inputPlayer2 === 'rock')
    ) {
      gameMessage = "You've won against me.";
      console.log(gameMessage);
      player2Points++;
      playerCount.innerText = player1Points;
      return;
    }

    if (
      (inputPlayer1 === 'paper' && inputPlayer2 === 'rock') ||
      (inputPlayer1 === 'scissors' && inputPlayer2 === 'paper') ||
      (inputPlayer1 === 'rock' && inputPlayer2 === 'scissors')
    ) {
      gameMessage = "You've lost against me. Please try again.";
      console.log(gameMessage);
      player1Points++;
      computerCount.innerText = player2Points;
      return;
    } else {
      console.log('The logic is not working correctly.');
      return;
    }
  }
}
