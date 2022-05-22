import { GameBoard } from "./gameBoard";
import { addHitButtons, chooseShipPosition} from "./helpers";
import {computerAI} from "./computerAI";
import { addAxisButton, clearBoardSection, showAvailablePositions, showPossiblePlacement, removeCurrentPlacement } from "./DOM";

const Player = (type) => {
    let attackedPositions = [];
    let openPositions = Array.from(Array(100).keys());
    let playerBoard = GameBoard()
    let axis = "x";

    //These variables are all important for computer AI.
    let hitLastTurn = false;
    let prevHits = [];
    let opponentBoard = GameBoard();
    let startRandom = true;
    let recentSunkPositions = [];

    function configureMemory (result, position, opponent) {
        // This configuration leads back to random picks
        // Computer stops purposeful picking once ship has been sunk
        opponentBoard = opponent;
        if (hitsSunkShip()) {
            prevHits = prevHits.filter(position => !recentSunkPositions.includes(position));
        }
        // Add hit to current hit array if successful
        if (result) {
            prevHits.push(position);
        }
        // Unfortunately, I need to check for sunk to add it to AI cond.
        startRandom = !hitsSunkShip() && prevHits.length !== 0 ? false : true;
        hitLastTurn = result;
    }

    // Check whether a ship has been sunk in the recent aimed shots
    function hitsSunkShip () {
        const enemyShips = opponentBoard.ships;
        for (let i = 0; i < enemyShips.length; i++) {
            let hitCount = 0;
            for (let j = 0; j < enemyShips[i].positions.length; j++) {
                if (prevHits.includes(enemyShips[i].positions[j])) {
                    hitCount++;
                }
            }
            if (hitCount === enemyShips[i].positions.length) {
                recentSunkPositions = enemyShips[i].positions;
                return true;
            }
        }
        return false;
    }

    function computerChooses () {
        const possibleOptions = computerAI(prevHits, opponentBoard, attackedPositions, startRandom, hitLastTurn);
        console.log(possibleOptions);
        let index = Math.floor(Math.random() * possibleOptions.length);
        const shot = possibleOptions[index];
        return shot;
    };

    async function attackEnemy () {
        if (type === "computer") {
            const chosenPosition = computerChooses();
            const positionIndex = openPositions.findIndex(index => index === chosenPosition);
            openPositions.splice(positionIndex, 1);
            attackedPositions.push(chosenPosition);
            return chosenPosition;
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
            switchOpens(openPositionsX, openPositionsY, length);
            let position = Number(await chooseShipPosition());
            const shipSpots = playerBoard.placeShip(position, axis, length, name);
            for (let i = 0; i < shipSpots.length; i++) {
                const boardSpot = document.querySelector(`[data-position="${shipSpots[i]}"]`);
                boardSpot.classList.add('ship');
            }
        }
    }

    function switchOpens (xPos, yPos, length) {
        playerBoard.updateBoardDOM("placement");
        if (axis === "x") {
            showAvailablePositions(xPos);
            showPlacement(xPos, length);
        }
        else if (axis === "y") {
            showAvailablePositions(yPos);
            showPlacement(yPos, length);
        }
        const axisButton = document.getElementById('axis-toggle');
        axisButton.addEventListener('click', () => {
            if (axis === "x") {
                showAvailablePositions(xPos);
                showPlacement(xPos, getLength());
            }
            else if (axis === "y") {
                showAvailablePositions(yPos);
                showPlacement(yPos, getLength());
            }
        }); 
    };

    // I dislike hard coding things, but I need to do this for the axistoggle button.
    // The placement size stays at five unless I cancel the event listeners required
    // for the async player pick
    function getLength () {
        let currentPlacement = playerBoard.ships.length;
        for (let i = 0; i < 3; i++) {
            if (currentPlacement === i) {
                return 5 - i
            }
        }
        for (let i = 3; i < 5; i++) {
            if (currentPlacement === i) {
                return 6 - i;
            }
        }
    }

    function showPlacement (positions, length) {
        const boardPositions = document.querySelectorAll('.placement button');
        boardPositions.forEach(position => {
            const coordinate = Number(position.getAttribute("data-position"));
            if (positions.includes(coordinate)) {
                position.addEventListener('mouseenter', () => {
                    showPossiblePlacement(axis, length, coordinate);
                });
                position.addEventListener('mouseleave', () => {
                    removeCurrentPlacement(axis, length, coordinate);
                })
            }
            else {position.classList.remove("possible-placement")};
        })
    }

    function removePlacementBoard () {
        clearBoardSection();
    }

    return {
        attackEnemy,
        setupBoard,
        removePlacementBoard,
        configureMemory,
        playerBoard,
        attackedPositions
    }
}

export { Player };