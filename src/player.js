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
    let nextHits = [];
    let opponentBoard = GameBoard();

    function configureMemory (result, position, opponent) {
        hitLastTurn = result;
        // Add hit to current hit array if successful
        if (hitLastTurn) {
            prevHits.push(position);
        }
        // If shot missed and there are no more possible options, go back to random
        else if (nextHits.length === 0) {
            prevHits = [];
        }
        // If shot missed, try another possible option
        opponentBoard = opponent;
    }

    function computerChooses () {
        const possibleOptions = computerAI(hitLastTurn, prevHits, opponentBoard, attackedPositions);
        nextHits = possibleOptions;
        let index = Math.floor(Math.random() * nextHits.length);
        const shot = nextHits[index];
        nextHits.splice(index, 1);
        return shot;
    };

    async function attackEnemy () {
        if (type === "computer") {
            if (!hitLastTurn && prevHits.length === 0) {
                let index = Math.floor(Math.random() * openPositions.length);
                let position = openPositions[index];
                openPositions.splice(index, 1);
                attackedPositions.push(position);
                return position;
            }
            else {
                const test = computerChooses();
                console.log(test);
                return test;
            };
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
            playerBoard.updateBoardDOM("placement");
            if (axis === "x") {
                showAvailablePositions(xPos);
                showPlacement(xPos, length);
            }
            else if (axis === "y") {
                showAvailablePositions(yPos);
                showPlacement(yPos, length);
            }
        });
    };

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