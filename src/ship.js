import { postMessage } from "./DOM";

const Ship = (name, positions) => {
    let alreadySunk = false;
    let hits = [];
    function hit (position) {
        if (!hits.includes(position)) {
            hits.push(position);
        }
    }

    //This is for posting the message when a ship first sinks
    function firstTimeSunk (player) {
        if (alreadySunk === false && hits.length === positions.length) {
            postMessage(`${ player } has sunk the opponent's ${ name }`);
            return true;
        }
        return false;
    }

    function isSunk () {
        const result = hits.length === positions.length;
        if (result) {
            alreadySunk = true;
        }
        return result;
    }

    return {
        hit,
        isSunk,
        firstTimeSunk,
        positions,
    }
}

export {Ship};