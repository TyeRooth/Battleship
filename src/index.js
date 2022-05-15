import './style.css';
import { Player } from "./player";

const player = Player("player");
const computer = Player("computer");
const pBoard = player.playerBoard;
const cBoard = computer.playerBoard;

pBoard.placeShip(2, "y", 3, "Submarine");
cBoard.placeShip(1, "x", 3, "Submarine");

pBoard.updateBoardDOM("player");
cBoard.updateBoardDOM("enemy");

async function gameFlow () {
    let turn = 0;
    do {
        if (turn % 2 === 0) {
            cBoard.receiveAttack(await player.attackEnemy());
            console.log(cBoard.missedShots);
        }
        else {
            pBoard.receiveAttack(await computer.attackEnemy());
            console.log(pBoard.missedShots);
        }
        pBoard.updateBoardDOM("player");
        cBoard.updateBoardDOM("enemy");
        turn++
    }
    while (!pBoard.checkLoseCondition() && !cBoard.checkLoseCondition());
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
}

gameFlow();
