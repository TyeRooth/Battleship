import {gameBoard} from "./gameBoard";

// This is the not working old AI, but I am keeping it here as a shout out to my first try.

let nextHits = [];
let opponentBoard;
let alreadyAttacked = [];
let rememberSplit;

// The board used by the AI is a copy of the player's board so they can detect sunk ships
function computerAI (prevHits, board, attackedPositions, startRandom, hitLastTurn) {
    opponentBoard = board;
    alreadyAttacked = attackedPositions;

    //Making it so that the computer is random for now

    //Once AI has found multiple ship direction
    console.log(checkForMultipleAxis(prevHits))
    if (checkForMultipleAxis(prevHits) && hitLastTurn && prevHits.length > 1) {
        console.log("multiple axis");
        const newShipArray = [prevHits[prevHits.length - 2], prevHits[prevHits.length - 1]];
        console.log(newShipArray);
        return caseThree(newShipArray);
    }

    else if (checkForMultipleAxis(prevHits) && prevHits.length > 1) {
        console.log("working good");
        return caseFour(prevHits, hitLastTurn);
    }

    // Remove hits from sunk ship so computer starts attacking other grouped ship(s)

    //Case 0: No previous hits, computer makes random shot
    else if (startRandom && prevHits.length === 0) {
        return randomShot();
    }

    //Case 1: Computer has made their first hit after random shooting turns
    //Case 2: Computer has missed after a first hit shot
    //Difference between to the two is Bool of hitLastTurn
    else if (prevHits.length === 1) {
        return caseOne(prevHits[0]);
    }

    //Case 3: Computer has made two hits adjacent to each other
    else if (prevHits.length === 2) {
        //Cond. needed for special case where computer two boats are beside each other
        if (hitLastTurn) {
            return caseThree (prevHits); 
        }
    }

    //Case 4: Computer has determined direction and all possible next hits
    else if (prevHits.length > 2 && nextHits.length !== 0) {
        return caseFour(prevHits, hitLastTurn);
    }

        //Case 5: Computer hits multiple ships in same set
    //Before case 3 due to how cond. work
    else if (nextHits.length === 0 && prevHits.length > 1) {
        console.log("multipleships");
        const randomIndex = Math.floor(Math.random() * prevHits.length);
        emptyNexts();
        console.log(nextHits);
        return caseOne(prevHits[prevHits.length - 1]);
    }
}

function emptyNexts () {
    nextHits.splice(0, nextHits.length);
}

function caseOne (position) {
    nextHits = checkBoardEdge(position);
    nextHits = checkAlreadyHit(nextHits);
    return nextHits;
}

function caseThree (prevHits) {
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

function caseFour (prevHits, hitLastTurn) {
    if (!hitLastTurn) {
        const difference = prevHits[1] - prevHits[0];
        //first set deals with initial direction
        if (difference > 0) {
            nextHits = nextHits.filter(hit => hit < prevHits[1]);
        }
        else if (difference < 0) {
            nextHits = nextHits.filter(hit => hit > prevHits[0]);
        }
        // Second set deals with opposite direction
        const difAbs = Math.abs(difference);
        if(Math.max(prevHits) + difAbs * 1 < nextHits[0]) {
            nextHits = nextHits.filter(hit => hit < nextHits[0]);
        }
        else if (Math.max(prevHits) + difAbs * 1 < nextHits[0]) {
            nextHits = nextHits.filter(hit => hit > nextHits[0]);
        }
    }
    const next = [nextHits[0]];
    nextHits.splice(0, 1);
    return next; 
}

function checkForMultipleAxis (pastHits) {
    const rowSize = 10;
    const row = Math.floor(pastHits[0] / rowSize);
    const column = pastHits[0] % rowSize;
    const columnCheck = pastHits.some(difColumn);
    const rowCheck = pastHits.some(difRow);
    if (columnCheck && rowCheck) {
        return true;
    }
    else {return false};
    function difColumn (element) {
        return (element % rowSize) !== column;
    }
    function difRow (element) {
        return (Math.floor(element / rowSize)) !== row;
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
    for (let i = 1; i <= 3; i++) {
        const nextTurn = [newHit + difference * i];
        if (checkAlreadyHit(nextTurn).length === 1) {
            if (checkWithinBoard(nextTurn, newHit, difference)) {
                nextHits.push(nextTurn[0]);
            }
        }
    }
    // Opposite direction possibilities
    for (let i = 1; i <= 3; i++) {
        const nextTurn = [pastHits[0] - difference * i];
        if (checkAlreadyHit(nextTurn).length === 1) {
            if (checkWithinBoard(nextTurn, newHit, difference)) {
                nextHits.push(nextTurn[0]);
            }
        }
    }
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