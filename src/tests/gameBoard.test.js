import { Ship } from "../ship";
import { GameBoard } from "../gameBoard"

let board;

beforeEach(() => {
    board = GameBoard (); 
})

it('check whether gameBoard can successfully create ship on X axis', () => {
    board.placeShip(11, "x", 2, "test");
    let newBoat = board.ships[0];
    newBoat.hit(11);
    newBoat.hit(12);
    expect(newBoat.isSunk()).toBe(true);
});

it('check whether gameBoard can successfully create ship on Y axis', () => {
    board.placeShip(11, "y", 3, "test");
    let newBoat = board.ships[0];
    newBoat.hit(11);
    newBoat.hit(12);
    newBoat.hit(13);
    expect(newBoat.isSunk()).toBe(true);
});

it('check whether receiveAttack adds a missed shot to board', () => {
    board.receiveAttack(1)
    expect(board.missedShots.length).toBe(1);
});

it('check whether receiveAttack hits boat', () => {
    board.placeShip(11, "x", 2, "test");
    board.receiveAttack(11);
    board.receiveAttack(12);
    expect(board.ships[0].isSunk()).toBe(true);
    expect(board.missedShots.length).toBe(0);
})

it('check whether checkShips returns true', () => {
    board.placeShip(11, "x", 1, "test");
    board.placeShip(13, "y", 1, "test2");
    board.receiveAttack(11);
    board.receiveAttack(13);
    expect(board.checkShips()).toBe(true)
});

it('check whether checkShips returns false when ships are alive', () => {
    board.placeShip(11, "x", 2, "test");
    expect(board.checkShips()).toBe(false);
})