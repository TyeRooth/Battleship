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

    function updateBoardDOM (type) {
        renderBoard(type, missedShots, hitShots);
    }

    return {
        placeShip,
        receiveAttack,
        ships,
        missedShots,
        checkLoseCondition,
        updateBoardDOM
    }
}

export {GameBoard};