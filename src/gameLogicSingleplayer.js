import { gameData } from'./index.js'
export const insertNameBlock = document.querySelector('.insert-name-block');

export function initSinglePlayer() {
  let inputPlayer;
  let inputComputer;

  function getComputerInput() {
    inputComputer = Math.floor(Math.random() * 3 + 1);
    switch (inputComputer) {
      case 1:
        return (inputComputer = 'rock');
      case 2:
        return (inputComputer = 'paper');
      case 3:
        return (inputComputer = 'scissors');
      default:
        break;
    }
  }

  const rockButton = document.querySelector('.rock');
  const paperButton = document.querySelector('.paper');
  const scissorsButton = document.querySelector('.scissors');
  let playerCount = document.querySelector('.player-count');
  let computerCount = document.querySelector('.computer-count');

  rockButton.addEventListener('click', (e) => {
    inputPlayer = 'rock';
    getComputerInput();
    console.log(
      `\n${gameData.playerChosenName} throws: ${inputPlayer} and computer throws: ${inputComputer}`
    );
    evaluateValues(inputComputer, inputPlayer);
  });
  paperButton.addEventListener('click', (e) => {
    inputPlayer = 'paper';
    getComputerInput();
    console.log(
      `\n${gameData.playerChosenName} throws: ${inputPlayer} and computer throws: ${inputComputer}`
    );
    evaluateValues(inputComputer, inputPlayer);
  });
  scissorsButton.addEventListener('click', (e) => {
    inputPlayer = 'scissors';
    getComputerInput();
    console.log(
      `\n${gameData.playerChosenName} throws: ${inputPlayer} and computer throws: ${inputComputer}`
    );
    evaluateValues(inputComputer, inputPlayer);
  });

  let playerPoints = 0;
  let computerPoints = 0;

  // Game Logic
  function evaluateValues(inputComputer, inputPlayer) {
    const gameMessage = document.querySelector(
      '.game-message-block'
    );


    if (inputComputer === inputPlayer) {
      gameMessage.innerText = "You've played a tie against me. Keep trying!";
      return;
    }

    if (
      (inputComputer === 'rock' && inputPlayer === 'paper') ||
      (inputComputer === 'paper' && inputPlayer === 'scissors') ||
      (inputComputer === 'scissors' && inputPlayer === 'rock')
    ) {
      gameMessage.innerText = "You've won against me.";
      playerPoints++;
      playerCount.innerText = playerPoints;
      return;
    }

    if (
      (inputComputer === 'paper' && inputPlayer === 'rock') ||
      (inputComputer === 'scissors' && inputPlayer === 'paper') ||
      (inputComputer === 'rock' && inputPlayer === 'scissors')
    ) {
      gameMessage.innerText = "You've lost against me. Please try again.";
      computerPoints++;
      computerCount.innerText = computerPoints;
      return;
    } else {
      console.log(getComputerInput());
      console.log(inputPlayer);
      console.log('The logic is not working correctly.');
      return;
    }
  }
}
