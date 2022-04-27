import './style.css';

const Ship = (name, positions) => {

    let hits = [];
    function hit (position) {
        hits.push(position);
    }
    function isSunk () {
        if (hits.length === positions.length) {
            return true;
        }
        else { return false };
    }

    return {
        hit,
        isSunk
    }
}

const GameBoard = () => {

    let ships = [];

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
    }

    return {
        placeShip,
        ships
    }
}

export {Ship, GameBoard};