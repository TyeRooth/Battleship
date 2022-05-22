import './style.css';
import { Player } from "./player";

const player = Player("player");
const computer = Player("computer");
const pBoard = player.playerBoard;
const cBoard = computer.playerBoard;

computer.setupBoard();

async function gameFlow () {
    pBoard.updateBoardDOM("placement");
    //waitTest is temporary while I understand asynchronous functions
    function waitTest(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, 1000);
        });
    }
    await player.setupBoard();
    await waitTest(10);
    player.removePlacementBoard()
    let turn = 0;
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
    do {
        if (turn % 2 === 0) {
            cBoard.receiveAttack(await player.attackEnemy());
        }
        else {
            const position = await computer.attackEnemy()
            const result = pBoard.receiveAttack(position);
            computer.configureMemory(result, position, pBoard);
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
