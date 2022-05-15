import { GameBoard } from "./gameBoard";
import { addHitButtons } from "./helpers";

const Player = (type) => {
    let attackedPositions = [];
    let openPositions = Array.from(Array(100).keys());
    let playerBoard = GameBoard()
    let axis = "x";

    async function attackEnemy () {
        if (type === "computer") {
            let index = Math.floor(Math.random() * openPositions.length);
            let position = openPositions[index];
            openPositions.splice(index, 1);
            attackedPositions.push(position);
            return position;
        }
        else if (type === "player") {
            let position = Number(await addHitButtons(attackedPositions));
            attackedPositions.push(position);
            openPositions.splice(position - attackedPositions.length, 1);
            return position;    
        }
    }

    function setupBoard () {
        setupShip(5, "Carrier");
        setupShip(4, "Battleship");
        setupShip(3, "Destroyer");
        setupShip(3, "Submarine");
        setupShip(2, "Patrol Boat");
    }

    async function setupShip (length, name) {
        if (type === "computer") {
            axis = (Math.random() < 0.5 ? "x" : "y");
            let openPositions = playerBoard.shipCanBePlaced(axis, length);
            console.log(openPositions);
            const randomPosition = openPositions[Math.floor(Math.random() * openPositions.length)];
            console.log(randomPosition);
            playerBoard.placeShip(randomPosition, axis, length, name);
        }
    }

    return {
        attackEnemy,
        setupBoard,
        playerBoard,
        attackedPositions
    }
}

export { Player };