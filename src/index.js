import './style.css';
import { Player } from "./player";

const player = Player("player");
const computer = Player("computer");
const pBoard = player.playerBoard;
const cBoard = computer.playerBoard;

pBoard.updateBoardDOM("player");
cBoard.updateBoardDOM("enemy");

player.attackEnemy();

let turn = 0;
do {
    turn++;
}
while (turn < 20);
