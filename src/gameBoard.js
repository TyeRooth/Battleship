import { Ship } from "./ship";
import { renderBoard } from "./DOM";

const GameBoard = () => {

    //Order of positions array lines up with order of ships array.
    let ships = [];
    let missedShots = [];
    let hitShots = [];
    const rowSize = 10;

    function placeShip (position, axis, length, name ) {
        let shipSpots = [];
        if (axis === "x") {
            for(let i = 0; i < length; i++) {
                shipSpots.push(position + i);
            }
        }
        else if (axis === "y") {
            for(let i = 0; i < length; i++) {
                shipSpots.push(position + rowSize * i);
            }
        }
        ships.push(Ship (name, shipSpots));
    }

    function receiveAttack (position) {
        for(let i = 0; i < ships.length; i++) {
            for(let j = 0; j < ships[i].positions.length; j++) {
                if (ships[i].positions[j] === position) {
                    ships[i].hit(position);
                    hitShots.push(position);
                    return;
                }
            }
        }
        missedShots.push(position);
    }

    function checkLoseCondition () {
        return ships.every((element) => { return element.isSunk();} );
    }

    function shipCanBePlaced (axis, length) {
        let availablePositions = [];
        for (let i = 0; i < 100; i++) {
            if (noCollisions(axis, i, length) && insideBoard(axis, i, length)) {
                availablePositions.push(i);
            }
        }
        return availablePositions;
    }
    
    function noCollisions (axis, position, length) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < ships.length; j++) {
                if (axis === "x") {
                    if (ships[j].positions.includes(position + i)) {
                        return false;
                    }
                }
                else if (axis === "y") {
                    if (ships[j].positions.includes(position + i * rowSize)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function insideBoard (axis, position, length) {
        if (axis === "x" && position % 10 + length - 1 < 10) {
            return true;
        }
        else if (axis === "y" && position + (length - 1) * rowSize < 100) {
            return true;
        }
        return false;
    }

    function updateBoardDOM (type) {
        renderBoard(type, missedShots, hitShots);
    }

    return {
        placeShip,
        receiveAttack,
        shipCanBePlaced,
        ships,
        missedShots,
        checkLoseCondition,
        updateBoardDOM,
        shipCanBePlaced
    }
}

export {GameBoard};