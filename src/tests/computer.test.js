import { Player } from "../player";

let computer;
let opponent;
let ai;

beforeEach(() => {
    computer = Player("computer");
    opponent = Player("computer").playerBoard;
    ai = computer.ai;
    ai.resetAI();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.83);
})

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
    computer = Player("computer");
    opponent = Player("computer").playerBoard;
})

describe('test random picks on empty board', () => {
    it('computer hits random spot after a miss', () => {
        expect(ai.testAI()).toBe(83);
    });

    it('computer randomly hits full board', () => {
        const fullBoard = 100;
        for (let i = 0; i < fullBoard; i++) {
            ai.testAI();
        }
        //Add sets to make sure that repeats are not in the missed array
        const missedSet = new Set();
        for(let i = 0; i < ai.missed.length; i++) {
            missedSet.add(ai.missed[i]);
        }
        expect(ai.missed.length).toBe(fullBoard);
        expect(missedSet.size).toBe(100);
    })
})

describe('test AI on board with separated and borderless ships', () => {
    beforeEach(() => {
        opponent.placeShip(11, "x", 3, "Submarine");
        opponent.placeShip(19, "y", 3, "Destroyer");
        ai.addOpponentShips(opponent); 
    })

    it ("opponent's ship positions are added to AI object", () => {
        expect (ai.possibleHits.length).toBe(6);
    })

    it ("computer hits consecutive coordinate after hit", () => {
        ai.manualAdd(11);
        expect (ai.testAI()).toBe(10);
    })

    it ("computer does not choose already attacked positions", () => {
        ai.manualAdd(1);
        ai.manualAdd(21);
        ai.manualAdd(10);
        ai.manualAdd(11);
        expect(ai.testAI()).toBe(12);
    })

    it ("computer hits third time after two adjacent hits", () => {
        ai.manualAdd(11);
        ai.manualAdd(12);
        ai.curDir = "right";
        expect (ai.testAI()).toBe(13);
    })

    it ("computer goes back to random after sinking a ship", () => {
        ai.manualAdd(11);
        ai.manualAdd(12);
        ai.manualAdd(13);
        expect (ai.testAI()).toBe(83);
    })

    it ("computer sinks ship if first hit is in the middle of ship", () => {
        ai.manualAdd(12);
        ai.manualAdd(13);
        ai.curDir = "right";
        ai.testAI();
        expect (ai.testAI()).toBe(11);
    })
}) 