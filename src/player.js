import { GameBoard } from "./gameBoard";
import { addHitButtons, chooseShipPosition } from "./helpers";
import { addAxisButton, clearBoardSection, showAvailablePositions } from "./DOM";

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

    function axisToggle () {
        const axisButton = document.getElementById('axis-toggle');
        axisButton.addEventListener('click', () => {
            if (axis === "x") {
                axis = "y"
                axisButton.textContent = "Axis: Y";
            }
            else if (axis === "y") {
                axis = "x";
                axisButton.textContent = "Axis: X";
            }
        })
    }

    async function setupBoard () {
        if (type === "player") {
            addAxisButton(axis);
            axisToggle();
        }
        await setupShip(5, "Carrier");
        await setupShip(4, "Battleship");
        await setupShip(3, "Destroyer");
        await setupShip(3, "Submarine");
        await setupShip(2, "Patrol Boat");
    }

    async function setupShip (length, name) {
        if (type === "computer") {
            axis = (Math.random() < 0.5 ? "x" : "y");
            let openPositions = playerBoard.shipCanBePlaced(axis, length);
            const randomPosition = openPositions[Math.floor(Math.random() * openPositions.length)];
            playerBoard.placeShip(randomPosition, axis, length, name);
        }
        else if (type === "player") {
            let openPositionsX = playerBoard.shipCanBePlaced("x", length);
            let openPositionsY = playerBoard.shipCanBePlaced("y", length);
            switchOpens(openPositionsX, openPositionsY);
            console.log(openPositions);
            console.log(axis);
            let position = Number(await chooseShipPosition());
            const shipSpots = playerBoard.placeShip(position, axis, length, name);
            for (let i = 0; i < shipSpots.length; i++) {
                const boardSpot = document.querySelector(`[data-position="${shipSpots[i]}"]`);
                boardSpot.classList.add('ship');
            }
            console.log(position);
        }
    }

    function switchOpens (xPos, yPos) {
        if (axis === "x") {
            showAvailablePositions(xPos);
        }
        else if (axis === "y") {
            showAvailablePositions(yPos);
        }
        const axisButton = document.getElementById('axis-toggle');
        axisButton.addEventListener('click', () => {
            if (axis === "x") {
                showAvailablePositions(xPos);
            }
            else if (axis === "y") {
                showAvailablePositions(yPos);
            }
        });
    };

    function removePlacementBoard () {
        clearBoardSection();
    }

    return {
        attackEnemy,
        setupBoard,
        removePlacementBoard,
        playerBoard,
        attackedPositions
    }
}

export { Player };