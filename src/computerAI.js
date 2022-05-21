import {gameBoard} from "./gameBoard";

// The board used by the AI is a copy of the player's board so they can detect sunk ships
function computerAI (hitLastTurn, prevHits, board) {
    let nextHits = [];
    console.log(hitLastTurn);
    console.log(prevHits);

    //Case
    
    //Case 1: Computer has made their first hit after random shooting turns
    if (hitLastTurn === true && prevHits.length === 1) {
        nextHits = checkBoardEdge(prevHits[0]);
        //Checks wether position has already been attacked
        nextHits = nextHits.filter(option => !board.missedShots.includes(option));
        console.log(nextHits);
    }

    //Case 2: Computer has m
    return nextHits;
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

function randomOption (possibleHits) {
    const randomIndex = Math.floor(Math.random() * possibleHits.length);
    return possibleHits[randomIndex];
}

export {computerAI};