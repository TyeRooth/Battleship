import { GameBoard } from "./gameBoard";

function createBoard () {
    const boardSection = document.getElementById('boards-section');
    const board = document.createElement('div');
    board.classList.add('board');
    for(let i = 0; i < 100; i++) {
        const position = document.createElement('button');
        position.classList.add('position');
        position.setAttribute('data-position', i);
        position.textContent = i;
        board.appendChild(position);
    };
    boardSection.appendChild(board);
};

export { createBoard };