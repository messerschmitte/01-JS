import {
  state,
  selectMode,
  selectRock,
  selectPaper,
  selectScissors,
} from "./model";
import {
  render,
  addHandlerInit,
  addHandlerSelectMode,
  addHandlerSelectRock,
  addHandlerSelectPaper,
  addHandlerSelectScissors,
  addHandlerSetPlayerName,
} from "./view";

export default function init() {
  render(state); // generates HTML/STATE & inserts in DOM

  addHandlerInit(); // inits computerInput

  addHandlerSelectMode(selectMode("Single")); // Selects game mode (single)

  addHandlerSetPlayerName();

  addHandlerSelectRock(selectRock); // selects rock

  addHandlerSelectPaper(selectPaper); // selects paper

  addHandlerSelectScissors(selectScissors); // selects scissors
}
