import {gameBoard} from "./gameBoard";

let nextHits = [];
let opponentBoard;
let alreadyAttacked = [];

// The board used by the AI is a copy of the player's board so they can detect sunk ships
function computerAI (prevHits, board, attackedPositions, startRandom) {
    opponentBoard = board;
    alreadyAttacked = attackedPositions;
    console.log(nextHits);
    console.log(prevHits);

    //Case 0: No previous hits, computer makes random shot
    if (startRandom) {
        return randomShot();
    }

    //Case 1: Computer has made their first hit after random shooting turns
    //Case 2: Computer has missed after a first hit shot
    //Difference between to the two is Bool of hitLastTurn
    else if (prevHits.length === 1) {
        nextHits = checkBoardEdge(prevHits[0]);
        nextHits = checkAlreadyHit(nextHits);
        return nextHits;
    }

    //Case 3: Computer has made two hits adjacent to each other
    else if (prevHits.length === 2) {
        nextHits.length = 0;
        // Difference determines whether the ship is vertical or horizontal.
        // Difference of 10 for vertical and 1 for horizontal.
        const difference = prevHits[1] - prevHits[0];
        addFutureShots(difference, prevHits);
        // The AI should have generated a full next steps list as this point
        const next = [nextHits[0]];
        nextHits.splice(0, 1);
        return next;
    }

    //Case 4: Computer has determined direction and all possible next hits
    else if (prevHits.length > 2 && nextHits.length !== 0) {
        const next = [nextHits[0]];
        nextHits.splice(0, 1);
        return next;
    }
}

function randomShot () {
    let openPositions = Array.from(Array(100).keys());
    for (let i = openPositions.length - 1; i > 0; i--) {
        if (alreadyAttacked.includes(openPositions[i])) {
            openPositions.splice(i, 1);
        }
    };
    let index = Math.floor(Math.random() * openPositions.length);
    return [openPositions[index]];
}

function addFutureShots (difference, pastHits) {
    const newHit = pastHits[pastHits.length -1]
    // Loop through and three possible hits in each direction unless already attacked or border
    for (let i = 0; i < 3; i++) {
        const nextTurn = [newHit + difference * i];
        if (checkAlreadyHit(nextTurn).length === 1) {
            if (checkWithinBoard(nextTurn, newHit, difference)) {
                nextHits.push(nextTurn[0]);
            }
        }
    }
    console.log(nextHits);
    // Opposite direction possibilities
    for (let i = 1; i <= 3; i++) {
        const nextTurn = [pastHits[0] - difference * i];
        console.log(checkAlreadyHit(nextTurn).length === 1);
        if (checkAlreadyHit(nextTurn).length === 1) {
            if (checkWithinBoard(nextTurn, newHit, difference)) {
                nextHits.push(nextTurn[0]);
            }
        }
    }
    console.log(nextHits);
}

// Separate border function needed for getting next hits
function checkWithinBoard (possible, alreadyHit, difference) {
    const rowChange = 10;
    const columnChange = 1;
    if (Math.abs(difference) === rowChange) {
        if (possible < 0 || possible > 99) {
            return false;
        }
        return true;
    }
    if (Math.abs(difference) === columnChange) {
        const row = getRow(alreadyHit);
        console.log(Math.floor(possible / 10));
        // Have to add !== 0 to account for 0 / 10 edge case
        if(getRow(possible) !== row && possible !== 0) {
            return false;
        }
        return true;
    }
    function getRow (position) {
        return Math.floor(position / 10);
    }
}

function checkAlreadyHit (possibleHits) {
    possibleHits = possibleHits.filter(option => !opponentBoard.missedShots.includes(option));
    possibleHits = possibleHits.filter(option => !alreadyAttacked.includes(option));
    return possibleHits;
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