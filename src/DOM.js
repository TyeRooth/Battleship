function renderBoard (type, missedShots, hitShots, shipSpots) {

    const boardSection = document.getElementById('boards-section');
    const boardNode = document.createElement('div');
    boardNode.classList.add('board-summary');
    const boardHeading = createHeading(type);
    boardNode.appendChild(boardHeading);

    const board = document.createElement('div');
    board.classList.add('board');
    board.classList.add(`${ type }`)
    for(let i = 0; i < 100; i++) {
        const position = document.createElement(`button`);
        position.classList.add('position');
        position.setAttribute('data-position', i);
        if (missedShots.includes(i)) {
            position.classList.add('shot');
            position.appendChild(missedShotDOM());
        }
        else if (hitShots.includes(i)) {
            position.classList.add('shot');
            position.appendChild(hitShotDOM());
        }
        else {
            position.textContent = i;
        }
        if (type === "player" && showShips(shipSpots, i)) {
           position.classList.add('ship');
        }
        else if (type === "placement" && showShips(shipSpots, i)) {
            position.classList.add("ship");
        }
        //Computer ships appear once sunk
        else if (type === "enemy" && showSunkShips(shipSpots, i)) {
            position.classList.add("ship");
        }
        board.appendChild(position);
    };
    if (!document.querySelector(`.${ type }`)) {
        boardNode.appendChild(board);
        boardSection.appendChild(boardNode);
    }
    else {
        const currentBoard = document.querySelector(`.${ type }`);
        currentBoard.textContent = "";
        currentBoard.appendChild(board);
    }
};

function showShips(shipSpots, position) {
    for(let i = 0; i < shipSpots.length; i++) {
        if (shipSpots[i].positions.includes(position)) {
            return true;
        }
    }
    return false;
}

//Shows computer ships once they are sunk
function showSunkShips (ships, position) {
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].isSunk("arg to prevent sink state") && ships[i].positions.includes(position)) {
            return true;
        }
    }
    return false;
}

function createHeading(type) {
    const headingNode = document.createElement('div');
    headingNode.classList.add('board-heading');
    if (type === "player") {
        headingNode.textContent = "Friendly Waters";
    }
    else if (type === "enemy") {
        headingNode.textContent = "Enemy Waters";
    }
    else if (type === "placement") {
        headingNode.textContent = "Ready your Ships";
    }
    return headingNode
}

function missedShotDOM () {
    const missCircle = document.createElement('div');
    missCircle.classList.add('circle');
    missCircle.style.backgroundColor = "white";
    return missCircle;
}

function hitShotDOM (position) {
    const hitCircle = document.createElement('div');
    hitCircle.classList.add('circle');
    hitCircle.style.backgroundColor = "red";
    return hitCircle;
}

function addAxisButton (axis) {
    const boardHeading = document.querySelector('.board-heading');
    const axisButton = document.createElement('button');
    axisButton.setAttribute('id', 'axis-toggle');
    if (axis === "x") {
        axisButton.textContent = "Axis: X";
    }
    else if (axis === "y") {
        axisButton.textContent = "Axis: Y";
    }
    boardHeading.appendChild(axisButton);
}

function showAvailablePositions(openPositions) {
    const positions = document.querySelectorAll('.placement button');
    positions.forEach(position => {
        if (openPositions.includes(Number(position.getAttribute('data-position')))) {
            position.classList.remove('unavailable');
            position.classList.add('available');
        }
        else {
            position.classList.remove('available');
            position.classList.add('unavailable');
        }
    })
}

function showPossiblePlacement (axis, length, coordinate) {
    if (axis === "x") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i}"]`);
            placement.classList.add("possible-placement");
        }
    }
    else if (axis === "y") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i * 10}"]`);
            placement.classList.add("possible-placement");
        }
    }
}

function removeCurrentPlacement (axis, length, coordinate) {
    if (axis === "x") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i}"]`);
            placement.classList.remove("possible-placement");
        }
    }
    else if (axis === "y") {
        for (let i = 0; i < length; i++) {
            const placement = document.querySelector(`[data-position="${coordinate + i * 10}"]`);
            placement.classList.remove("possible-placement");
        }
    }  
}

function clearBoardSection () {
    const boardSection = document.getElementById('boards-section');
    boardSection.textContent = "";
}

function postMessage (message) {
    const messageBox = document.getElementById('message');
    messageBox.textContent = message;
} 

function addToMessage (addedText) {
    const messageBox = document.getElementById('message');
    messageBox.textContent = messageBox.textContent + addedText;
}

export { renderBoard, addAxisButton, clearBoardSection, showAvailablePositions, showPossiblePlacement, removeCurrentPlacement, postMessage, addToMessage };