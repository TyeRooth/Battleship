import { GameBoard, Ship } from "../index";

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