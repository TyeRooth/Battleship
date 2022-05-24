let compAI = {
    hit : [],
    missed : [],
    lastShot : null,
    lastHit : null,
    lastShotWasHit : false,
    opponentShips : [],
    possibleHits : [],
    activeHits : [],
    curDir : null,
    changedDir : false,

    // Required for AI to recognize whether a hit has been made
    addOpponentShips : function (board) {
        this.opponentShips = board.ships;
        for (let i = 0; i < this.opponentShips.length; i++) {
            for (let j = 0; j < this.opponentShips[i].positions.length; j++) {
                this.possibleHits.push(this.opponentShips[i].positions[j]);
            }
        }
    },

    //Manual add is used in my tests for the computer
    manualAdd : function (coord) {
        this.activeHits = removeSunkShip(this.activeHits, this.opponentShips);
        this.configureAI(coord);
    },

    //Reset AI also important for testing since I am having trouble with teardown
    resetAI : function () {
        this.hit = [];
        this.missed = [];
        this.lastShot = null;
        this.lastHit = null;
        this.lastShotWasHit = false;
        this.opponentShips = [];
        this.possibleHits = [];
        this.activeHits = [];
        this.curDir = null;
    },

    wasHit : function (coord) {
        return this.possibleHits.includes(coord); 
    },

    // Test to see whether generated shot is a hit and changes the object accordingly
    // Essentially this configures the variables important for deciding on a shot
    configureAI : function (newShot) {
        this.lastShot = newShot;
        if (this.wasHit(newShot)) {
            this.hit.push(newShot);
            this.lastShotWasHit = true;
            this.lastHit = newShot;
            this.activeHits.push(newShot);
        }
        else {
            this.missed.push(newShot);
            this.lastShotWasHit = false;
        }
        return newShot;
    },

    //Main method
    testAI : function () {
        this.activeHits = removeSunkShip(this.activeHits, this.opponentShips);
        //After first hit after random period
        if (this.activeHits.length === 1) {
            const posDir = checkDirectionAvailable(this.lastHit, this.missed, this.hit);
            this.curDir = posDir[randomIndex(posDir)];
            let newShot = createNewShot(this.lastShot, this.curDir);
            return this.configureAI(newShot);
        }
        //Random Shot
        else if (this.activeHits.length === 0) {
            let openPositions = getOpenPositions(this.hit, this.missed);
            const newShot = openPositions[randomIndex(openPositions)];
            //In case of fullBoard
            if (newShot === undefined) {
                return;
            }
            return this.configureAI(newShot);
        }
        // After two adjacent coords have been hit
        else if (this.activeHits.length === 2 && this.lastShotWasHit) {
            let newShot = createNewShot(this.lastHit, this.curDir);
            return this.configureAI(newShot);
        }
        // A miss after consecutive hits to change directions
        else if (this.activeHits.length > 1 && !this.lastShotWasHit) {
            this.curDir = oppDir(this.curDir);
            let newShot = createNewShot(this.activeHits[0], this.curDir);
            return this.configureAI(newShot);
        }
    }
};

function getOpenPositions (missed, hit) {
    let openPositions = [];
    for (let i = 0; i < 100; i++) {
        if (!missed.includes(i) && !hit.includes(i)) {
            openPositions.push(i);
        }
    }
    return openPositions;
}

function createNewShot (position, direction) {
    if (direction === "up") {
        return position - 10;
    }
    else if (direction === "right") {
        return position + 1;
    }
    else if (direction === "down") {
        return position + 10;
    }
    else if (direction === "left") {
        return position -1;
    }
}

// This is how the computer will be able to tell it has sunk a ship
// If activeHits.length === 0 after this, computer will shoot randomly again
function removeSunkShip (active, ships) {
    let sunkPositions = [];
    for (let i = 0; i < ships.length; i++) {
        let hitCount = 0;
        for (let j = 0; j < ships[i].positions.length; j++) {
            if (active.includes(ships[i].positions[j])) {
                hitCount++;
            }
        }
        if (hitCount === ships[i].positions.length) {
            sunkPositions = ships[i].positions;
        }
    }
    for (let i = 0; i < sunkPositions.length; i++) {
        for (let j = active.length - 1; j >= 0; j--) {
            if (sunkPositions.includes(active[j])) {
                active.splice(j, 1);
            }
        }
    }
    return active;
}

function checkDirectionAvailable (coord, hits, misses) {
    let possibleDirections = [];
    const rowDif = 10;
    const colDif = 1;
    const up = coord - rowDif;
    if (up >= 0 && checkNotShot(up, hits, misses)) {
        possibleDirections.push("up");
    }
    const right = coord + colDif;
    if (right % rowDif !== 0 && checkNotShot(right, hits, misses)) {
        possibleDirections.push("right");
    }
    const down = coord + rowDif;
    if (down < 100 && checkNotShot(down, hits, misses)) {
        possibleDirections.push("down");
    }
    const left = coord - colDif;
    if (left % rowDif !== 9 && checkNotShot(left, hits, misses)) {
        possibleDirections.push("left");
    }
    return possibleDirections;
}

function checkNotShot (coord, hitArray, missArray) {
    if (!hitArray.includes(coord) && !missArray.includes(coord)) {
        return true;
    }
    else {false;}
}

function oppDir(dir) {
    if (dir === "up") {
        return "down";
    }
    else if (dir === "right") {
        return "left";
    }
    else if (dir === "down") {
        return "up";
    }
    else if (dir === "left") {
        return "right";
    }
}

//I will be using this a lot
function randomIndex (array) {
    return Math.floor(Math.random() * array.length);
}

export { compAI };