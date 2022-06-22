import { PigDice } from './../src/Pig-dice.js';

describe('PigDice', () => {

  test('should return a object called player1, contains name,  diceRoll, turnTotal and currentOverallScore',() => {
  let player1 = new PigDice ("player1", "active");
  expect(player1.name).toEqual("player1");
  expect(player1.diceRoll).toEqual(0);
  expect(player1.turnTotal).toEqual(0);
  expect(player1.currentOverallScore).toEqual(0);
  expect(player1.activePlayer).toEqual("active")  
  })

  test("should add scor to turnTotal if the score larger than 1", () => {
    let randomNum = 2;
    let player1 = new PigDice ("Player1", "active");
    expect(player1.roll(randomNum)).toEqual(2);
  })

  test('should end turn if dice roll is a 1', () => {
    let randomNum = 1;
    let player1 = new PigDice("Player1", "active");
    expect(player1.roll(randomNum)).toEqual("Your turn is over");
  });

  test("should return not your turn yet, if the player is inactive", () => {
    let player1 = new PigDice ("Player1", "inactive");
    expect(player1.roll()).toEqual("It's not your turn yet!");
  })

  test("should add turnTotal score to currentOverallScore if press hold", () => {
    let player1 = new PigDice ("Player1", "active");
    player1.roll(2);
    player1.roll(3);
    expect(player1.hold()).toEqual(5);
    expect(player1.turnTotal).toEqual(0);
  })

  // test("should let one player be active and inactive", () => {
  //   let player1 = new PigDice ("Player1", "active");
  //   player1.switch();
  //   expect(player1.activePlayer).toEqual("inactive");
  // })
});

// describe('randomNum', () => {
//   test('should return a random number for 1-6',() => {
//     expect(randomNum()).toBeLesserThanOrEqual(6);
//   });
// });
