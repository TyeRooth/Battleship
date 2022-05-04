import './style.css';
import { Player } from "./player";

const player = Player("player");
const computer = Player("computer");
const pBoard = player.playerBoard;
const cBoard = computer.playerBoard;

pBoard.updateBoardDOM();
cBoard.updateBoardDOM();
