import rockWhiteIMG from "../static/rock-white.png";
import airplaneWhiteIMG from "../static/airplane-white.png";
import scissorsWhiteIMG from "../static/scissors-white.png";

const parentElement = document.querySelector(".parent-container");

let playerNameInput;
let insertNameBlock;

let state;

function generateMarkup() {
  return `    
  <header></header>
      <section id="choose-mode">
        <button id="single-player" class="btn-mode">Singleplayer</button>
        <button id="multi-player" class="btn-mode">Multiplayer</button>
      </section>
      <section id="game">
        <div class="button-container">
          <button class="rock button-markup">
            <image
              src="${rockWhiteIMG}"
              alt="Rock"
              class="game-image"
            ></image>
          </button>
          <button class="paper button-markup">
            <image
              src="${airplaneWhiteIMG}"
              alt="Paper"
              class="game-image"
            ></image>
          </button>
          <button class="scissors button-markup">
            <image
              src="${scissorsWhiteIMG}"
              alt="Scissors"
              class="game-image"
            ></image>
          </button>
        </div>
        <div class="results-container">
          <div class="player-block">
            <div class="player-name">${state.playerChosenName}</div>
            <div class="player-count">${state.playerPoints}</div>
          </div>
          <div class="computer-block">
            <div class="computer-name">Computer:</div>
            <div class="computer-count">${state.computerPoints}</div>
          </div>
        </div>
        <div class="game-message-block">Wins</div>
      </section>
      <form class="insert-name-block">
        <label for="player-name-input">Enter Username</label>
        <input
          type="text"
          value="test"
          id="player-name-input"
          placeholder="Name"
        />
        <button class="player-name-btn">Start Playing</button>
      </form>
    <footer></footer>
    `;
}

function clear() {
  parentElement.innerHTML = "";
}

export function render(data) {
  state = data;
  console.log(state);
  const markup = generateMarkup();
  // console.log(markup);
  clear();
  parentElement.insertAdjacentHTML("afterbegin", markup);
}

export function addHandlerInit(handler) {
  const playerNameBtn = document.querySelector(".player-name-btn");

  playerNameBtn.addEventListener("click", handler, {
    once: true,
  });
}

export function addHandlerSelectMode(setSingle) {
  insertNameBlock = document.querySelector(".insert-name-block");
  playerNameInput = document.querySelector("#player-name-input");
  const chooseMode = document.querySelector("#choose-mode");
  const singlePlayer = document.querySelector("#single-player");

  insertNameBlock.style.display = "flex";
  playerNameInput.focus();
  chooseMode.style.display = "none";

  singlePlayer.addEventListener("click", setSingle, { once: true });
}

export function addHandlerSetPlayerName() {
  const playerName = document.querySelector(".player-name");
  const game = document.querySelector("#game");

  // e.preventDefault();
  if (!playerNameInput.value) return;
  state.playerChosenName = playerNameInput.value;
  playerName.innerText = `${playerNameInput.value}:`;
  playerNameInput.value = "";
  console.log(`${state.playerChosenName} set as player name`);
  insertNameBlock.remove();
  game.style.display = "flex";
}

export function addHandlerSelectRock(setRock) {
  const rockButton = document.querySelector(".rock");

  rockButton.addEventListener("click", setRock);
}

export function addHandlerSelectPaper(setPaper) {
  const paperButton = document.querySelector(".paper");

  paperButton.addEventListener("click", setPaper);
}

export function addHandlerSelectScissors(setScissors) {
  const scissorsButton = document.querySelector(".scissors");

  scissorsButton.addEventListener("click", setScissors);
}
