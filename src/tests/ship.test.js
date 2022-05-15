import { Ship } from "../ship";

let patrolBoat;

beforeEach(() => {
    patrolBoat = Ship ("patrol boat", [3, 4]);
})

//There is no need to check Ship.hit function since isSunk relies on it doing its work

it ('check whether isSunk returns as false if not all positions are hit', () => {
    patrolBoat.hit(3);
    expect(patrolBoat.isSunk()).toBe(false);
});

it ('check whether isSunk returns as false if the same position is hit multiple times', () => {
    patrolBoat.hit(3);
    patrolBoat.hit(3);
    expect(patrolBoat.isSunk()).toBe(false);
})

it ('check whether isSunk returns as true if all positions hit', () => {
    patrolBoat.hit(3);
    patrolBoat.hit(4);
    expect(patrolBoat.isSunk()).toBe(true);
});