import { Ship } from "./ship";

const GameBoard = () => {

    //Order of positions array lines up with order of ships array.
    let ships = [];
    let positions = [];
    let missedShots = [];

    function placeShip (position, axis, length, name ) {
        let shipSpots = [];
        if (axis === "x") {
            for(let i = 0; i < length; i++) {
                shipSpots.push(position + i);
            }
        }
        else if (axis === "y") {
            for(let i = 0; i < length; i++) {
                shipSpots.push(position + 10 * i);
            }
        }
        ships.push(Ship (name, shipSpots));
        positions.push(shipSpots);
    }

    function receiveAttack (position) {
        for(let i = 0; i < ships.length; i++) {
            for(let j = 0; j < positions[i].length; j++) {
                if (positions[i][j] === position) {
                    ships[i].hit(position);
                    return;
                }
            }
        }
        missedShots.push(position);
    }

    function checkShips () {
        return ships.every((element) => { return element.isSunk();} );
    } 

    return {
        placeShip,
        receiveAttack,
        ships,
        missedShots,
        checkShips
    }
}

export {GameBoard};