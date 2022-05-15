import { Player } from "../player";

let computer;
let opponent;
let boardOne;
let boardTwo;
const totalBoardPositions = 100;

beforeEach(() => {
    computer = Player("computer");
    opponent = Player("computer");
    boardOne = computer.playerBoard;
    boardTwo = opponent.playerBoard;
});

it('computer hits 20 different spots on board', () => {
    const setCheck = new Set();
    for(let i = 0; i < 20; i++) {
        computer.attackEnemy();
        //Create set for checking variable positions
        setCheck.add(computer.attackedPositions[i]);
    }
    expect(setCheck.size).toBe(computer.attackedPositions.length);
});

it('computer hits only positions on the board', () => {
    for(let i = 0; i < 20; i++) {
        computer.attackEnemy();
    };
    expect(computer.attackedPositions.every((position) => {
        return position >= 0 || position < totalBoardPositions;
    })).toBe(true);
});

