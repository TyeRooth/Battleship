import { Player } from "../player";

let computer;
let opponent;
let ai;

beforeEach(() => {
    computer = Player("computer");
    opponent = Player("computer").playerBoard;
    ai = computer.ai;
    ai.resetAI();
    // Makes random calls 0.83 every time
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

describe('test AI on board with ships', () => {
    beforeEach(() => {
        // Separated ship
        opponent.placeShip(11, "x", 3, "Submarine");
        //Border ship
        opponent.placeShip(60, "y", 4, "Battleship");
        //Adjacent ships
        opponent.placeShip(96, "x", 4, "Battleship");
        opponent.placeShip(87, "x", 3, "Destroyer");
        opponent.placeShip(78, "x", 2, "Patrol Boat");
        // T layout ships
        opponent.placeShip(27, "x", 3, "T-top");
        opponent.placeShip(38, "y", 3, "T-bottom");

        ai.addOpponentShips(opponent); 
    })

    it ("opponent's ship positions are added to AI object", () => {
        expect (ai.possibleHits.length).toBe(22);
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

    it("computer moves in opposite direction if there is a miss shot past ship", () => {
        ai.manualAdd(14);
        ai.manualAdd(12);
        ai.manualAdd(13);
        ai.curDir = "right";
        expect (ai.testAI()).toBe(11);
    })

    it("computer moves in opposite direction if there is a border past ship", () => {
        ai.manualAdd(80);
        ai.manualAdd(90);
        ai.curDir = "down";
        expect (ai.testAI()).toBe(70);
    })

    it("computer can sink ship with more than three coords", () => {
        ai.manualAdd(60);
        ai.manualAdd(70);
        ai.curDir = "down";
        ai.testAI();
        expect (ai.testAI()).toBe(90);
    })

    it("computer can detect and sink multiple ships", () => {
        ai.manualAdd(78);
        ai.manualAdd(88);
        ai.curDir = "down";
        ai.testAI();
        ai.testAI();
        expect (ai.testAI()).toBe(77);
        expect (ai.testAI()).toBe(79);
        expect (ai.testAI()).toBe(87);
        expect (ai.testAI()).toBe(86);
        expect (ai.testAI()).toBe(89);
        expect (ai.testAI()).toBe(97);
        expect (ai.testAI()).toBe(96);
        expect (ai.testAI()).toBe(95);
        expect (ai.testAI()).toBe(99);
        // Adding a random one as well
        expect (ai.testAI()).toBe(73);
    })

    it("computer can detect and sink multiple ships in a T layout", () => {
        ai.manualAdd(28);
        ai.manualAdd(38);
        ai.curDir = "down";
        ai.testAI();
        ai.testAI();
        expect(ai.testAI()).toBe(27);
        expect(ai.testAI()).toBe(26);
        expect(ai.testAI()).toBe(29);
    })
})