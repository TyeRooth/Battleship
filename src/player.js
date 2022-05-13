import { GameBoard } from "./gameBoard";

const Player = (type) => {
    let attackedPositions = [];
    let playerBoard = GameBoard()
    

    function attackEnemy () {
        if (type === "computer") {
            let position;
            do {
                position = Math.floor(Math.random() * 100);
            }
            while (attackedPositions.includes(position));
            attackedPositions.push(position);
            return position;
        }
    }

    return {
        attackEnemy,
        playerBoard,
        attackedPositions
    }
}

export { Player };