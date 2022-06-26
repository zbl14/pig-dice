import { PigDice } from './../src/js/pig-dice.js';

describe('PigDice', () => {
  let player1, player2

  beforeEach(() => {
    player1 = new PigDice("A")
    player2 = new PigDice("B")
  });

  test('should return a object called player1, contains name,  diceRoll, turnTotal and currentOverallScore',() => {
  expect(player1.name).toEqual("A");
  expect(player1.diceRoll).toEqual(0);
  expect(player1.turnTotal).toEqual(0);
  expect(player1.currentOverallScore).toEqual(0);
  expect(player1.activePlayer).toEqual(0);  
  })

  test('should return 2 for both diceRoll and turnTotal, if roll a 2', () => {
    player1.roll();
    if (player1.roll() === 2) {
      expect(player1.diceRoll).toEqual(2);
      expect(player1.turnTotal).toEqual(2);
    }
  });

  test('should return 1 for diceRoll, 0 for turnTotal, if roll a 1', () => {
    player1.roll();
    if (player1.roll() === 1) {
      expect(player1.diceRoll).toEqual(1);
      expect(player1.turnTotal).toEqual(0);
    }
  });

  
  test("should add turnTotal score to currentOverallScore if press hold", () => {
    let player1 = new PigDice ("Player1");
    player1.hold();
    if (player1.roll() === 5) {
      expect(player1.hold()).toEqual(5);
      expect(player1.turnTotal).toEqual(0);
    }
  });

  test("should make activePlayer to 0 for those getting 1", () => {
    let player1 = new PigDice ("Player1");
    player1.switch()
    if (player1.roll() === 1) {
      player1.switch()
      expect(player1.activePlayer).toEqual(0);
    }
  });

  test("should make activePlayer to 0 for those pressing hold ", () => {
    let player1 = new PigDice ("Player1");
    player1.switch()
    if (player1.roll() !== 1) {
      player1.hold()
      player1.switch()
      expect(player1.activePlayer).toEqual(0);
    }
  });
});