import {gameBoard} from "./gameBoard";

// The board used by the AI is a copy of the player's board so they can detect sunk ships
function computerAI (hitLastTurn, prevHits, board, attackedPositions) {
    let nextHits = [];
    
    //Case 1: Computer has made their first hit after random shooting turns
    //Case 2: Computer has missed after a first hit shot
    //Difference between to the two is Bool of hitLastTurn
    if (prevHits.length === 1) {
        nextHits = checkBoardEdge(prevHits[0]);
        nextHits = checkAlreadyHit(nextHits);
    }

    //Case 3: Computer has made two hits adjacent to each other
    if (prevHits.length > 1) {
        nextHits = checkBoardEdge(prevHits[prevHits.length - 1]);
        nextHits = checkAlreadyHit(nextHits);
        const difference = prevHits[1] - prevHits[0];
        nextHits = nextHits.filter(option => option === prevHits[prevHits.length - 1] + difference);
    }

    return nextHits;

    function checkAlreadyHit (possibleHits) {
        possibleHits = possibleHits.filter(option => !board.missedShots.includes(option));
        possibleHits = possibleHits.filter(option => !attackedPositions.includes(option));
        return possibleHits;
    }
}

function verticalShipCheck (prevHits) {
    return (Math.abs(prevHits[0] - prevHits[1]) === 10) ? true : false; 
}

function checkBoardEdge (lastHit) {
    let possibleNextHits = [];
    if (lastHit >= 10) {
        possibleNextHits.push(lastHit - 10);
    }
    if (lastHit % 10 !== 9) {
        possibleNextHits.push(lastHit + 1);
    }
    if (lastHit < 90) {
        possibleNextHits.push(lastHit + 10);
    }
    if (lastHit % 10 !== 0) {
        possibleNextHits.push(lastHit - 1);
    }
    return possibleNextHits;
}

export {computerAI};