export const state = {
  inputComputer: "",
  inputPlayer: "",
  playerPoints: 0,
  computerPoints: 0,
  playerChosenName: "",
  gameMessage: "",
};

export function selectMode(mode) {
  if (mode === "single") {
    console.log(`${mode}player mode selected`);
  }
}

// export default function setSinglePlayerName(e) {
// }

function getComputerInput() {
  const randomGenNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomGenNumber) {
    case 1:
      state.inputComputer = "rock";
      break;
    case 2:
      state.inputComputer = "paper";
      break;
    case 3:
      state.inputComputer = "scissors";
      break;
    default:
      break;
  }
  // console.log(state.inputComputer);
  return state.inputComputer;
}

function evaluateValues() {
  if (state.inputComputer === state.inputPlayer) {
    state.gameMessage = "You've played a tie against me. Keep trying!";
  } else if (
    (state.inputComputer === "rock" && state.inputPlayer === "paper") ||
    (state.inputComputer === "paper" && state.inputPlayer === "scissors") ||
    (state.inputComputer === "scissors" && state.inputPlayer === "rock")
  ) {
    state.gameMessage = "You've won against me.";
    state.playerPoints += 1;
  } else if (
    (state.inputComputer === "paper" && state.inputPlayer === "rock") ||
    (state.inputComputer === "scissors" && state.inputPlayer === "paper") ||
    (state.inputComputer === "rock" && state.inputPlayer === "scissors")
  ) {
    state.gameMessage = "You've lost against me. Please try again.";
    state.computerPoints += 1;
  } else {
    console.log(state.inputComputer);
    console.log(state.inputPlayer);
    console.log("The logic is not working correctly.");
  }
  console.log(state.gameMessage);
}
export function selectRock() {
  state.inputPlayer = "rock";
  getComputerInput();
  console.log(
    `\n${state.playerChosenName} throws: ${state.inputPlayer} and computer throws: ${state.inputComputer}`,
  );
  evaluateValues(state.inputComputer, state.inputPlayer);
}

export function selectPaper() {
  state.inputPlayer = "paper";
  getComputerInput();
  console.log(
    `\n${state.playerChosenName} throws: ${state.inputPlayer} and computer throws: ${state.inputComputer}`,
  );
  evaluateValues(state.inputComputer, state.inputPlayer);
}

export function selectScissors() {
  state.inputPlayer = "scissors";
  getComputerInput();
  console.log(
    `\n${state.playerChosenName} throws: ${state.inputPlayer} and computer throws: ${state.inputComputer}`,
  );
  evaluateValues(state.inputComputer, state.inputPlayer);
}
