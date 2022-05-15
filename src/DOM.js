import { GameBoard } from "./gameBoard";

function renderBoard (type, missedShots, hitShots) {
    const boardSection = document.getElementById('boards-section');
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
        board.appendChild(position);
    };
    if (!document.querySelector(`.${ type }`)) {
        boardSection.appendChild(board);
    }
    else {
        const currentBoard = document.querySelector(`.${ type }`);
        currentBoard.textContent = "";
        currentBoard.appendChild(board);
    }  
};

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

export { renderBoard };