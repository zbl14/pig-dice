import { PigDice } from './../src/Pig-dice.js';

describe('PigDice', () => {

  test('should return a object called player1, contains name,  diceRoll, turnTotal and currentOverallScore',() => {
  let player1 = new PigDice ("player1");
  expect(player1.name).toEqual("player1");
  expect(player1.diceRoll).toEqual(0);
  expect(player1.turnTotal).toEqual(0);
  expect(player1.currentOverallScore).toEqual(0);
  expect(player1.activePlayer).toEqual(0);  
  })

  // test("should add scor to turnTotal if the score larger than 1", () => {
  //   let randomNum = 2;
  //   let player1 = new PigDice ("Player1", "active");
  //   expect(player1.roll(randomNum)).toEqual(2);
  // })

  // test('should end turn if dice roll is a 1', () => {
  //   let randomNum = 1;
  //   let player1 = new PigDice("Player1", "active");
  //   expect(player1.roll(randomNum)).toEqual("Your turn is over");
  // });

  test('should return 2-6 if not getting 1', () => {
    let player1 = new PigDice("Player1");
    player1.roll();
    if (player1.roll() !== 1) {
      expect(player1.diceRoll).toBeGreaterThanOrEqual(2);
      expect(player1.diceRoll).toBeLessThanOrEqual(6);
    } else {
      expect(player1.diceRoll).toEqual(1);
      expect(player1.activePlayer).toEqual(1);
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
    player1.enable()
    if (player1.roll() === 1) {
      player1.enable()
      expect(player1.activePlayer).toEqual(0);
    }
  });

  test("should make activePlayer to 0 for those pressing hold ", () => {
    let player1 = new PigDice ("Player1");
    player1.enable()
    if (player1.roll() !== 1) {
      player1.hold()
      player1.enable()
      expect(player1.activePlayer).toEqual(0);
    }
  });
});