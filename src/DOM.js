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
            position.textContent = "miss"
        }
        else if (hitShots.includes(i)) {
            position.classList.add('shot');
            position.textContent = "hit";
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

export { renderBoard };