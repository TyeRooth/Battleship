import './style.css';
import { Player } from "./player";
import { postMessage } from './DOM';

async function gameFlow () {
    const player = Player("player");
    const computer = Player("computer");
    const pBoard = player.playerBoard;
    const cBoard = computer.playerBoard;
    computer.setupBoard();
    pBoard.updateBoardDOM("placement");
    //waitTest is temporary while I understand asynchronous functions
    function waitTest(x, time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, time);
        });
    }
    await player.setupBoard();
    await waitTest(10, 1000);
    player.removePlacementBoard()
    computer.ai.addOpponentShips(pBoard);
    let turn = 0;
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
    do {
        if (turn % 2 === 0) {
            postMessage("Shoot your shot");
            cBoard.receiveAttack(await player.attackEnemy());
        }
        else {
            pBoard.receiveAttack(await computer.attackEnemy());
        }
        pBoard.updateBoardDOM("player");
        cBoard.updateBoardDOM("enemy");
        await waitTest(10, 3000);
        // This is for posting a message if a ship has been sunk
        if (pBoard.checkFirstTimeSunk("Computer") || cBoard.checkFirstTimeSunk("Player")) {
            await waitTest(10, 3000);
        }
        turn++;
    }
    while (!pBoard.checkLoseCondition() && !cBoard.checkLoseCondition());
    if (pBoard.checkLoseCondition()) {
        postMessage("Computer has won the battle");
    }
    else if (cBoard.checkLoseCondition()) {
        postMessage("Player has won the battle");
    }
    pBoard.updateBoardDOM("player");
    cBoard.updateBoardDOM("enemy");
}

gameFlow();
