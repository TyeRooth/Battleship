import { GameBoard } from "./gameBoard";
import { addHitButtons } from "./helpers";

const Player = (type) => {
    let attackedPositions = [];
    let openPositions = Array.from(Array(100).keys());
    let playerBoard = GameBoard()

    function attackEnemy () {
        if (type === "computer") {
            let index = Math.floor(Math.random() * openPositions.length);
            let position = openPositions[index];
            openPositions.splice(index, 1);
            attackedPositions.push(position);
            return position;
        }
        else if (type === "player") {
            let position = addHitButtons(attackedPositions);    
        }
    }

    return {
        attackEnemy,
        playerBoard,
        attackedPositions
    }
}

export { Player };