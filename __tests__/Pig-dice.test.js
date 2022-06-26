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

  test('should return a number between 1-6',() => {
    expect(player1.randomNum()).toBeGreaterThanOrEqual(1);
    expect(player1.randomNum()).toBeLessThanOrEqual(6);
  });

  test('should return 1 for diceRoll, 0 for turnTotal, if roll a 1', () => {
    player1.roll(1);
    expect(player1.diceRoll).toEqual(1);
    expect(player1.turnTotal).toEqual(0);
  });

  test('should return 2 for both diceRoll and turnTotal, if roll a 2', () => {
    player1.roll(2);
    expect(player1.diceRoll).toEqual(2);
    expect(player1.turnTotal).toEqual(2);
  });

  test('should return 0 for turnTotal, if roll a 2 then roll a 1', () => {
    player1.roll(2);
    player1.roll(1);
    expect(player1.diceRoll).toEqual(1);
    expect(player1.turnTotal).toEqual(0);
  });

  test('should return 0 for turnTotal, if roll a 2 then roll a 1', () => {
    player1.roll(2);
    player1.roll(3);
    expect(player1.diceRoll).toEqual(3);
    expect(player1.turnTotal).toEqual(5);
  });

  test('should return 1 for activePlayer', () => {
    player1.switch();
    expect(player1.activePlayer).toEqual(1);
  }); 

  test('should add turnTotal to currentOverallScore', () => {
    player1.roll(5);
    player1.hold();
    expect(player1.currentOverallScore).toEqual(5);
    expect(player1.activePlayer).toEqual(1);
  });

  test('should return 1 for diceRoll, 0 for turnTotal, 1 for activePlayer if roll a 1', () => {
    player1.roll(1);
    expect(player1.diceRoll).toEqual(1);
    expect(player1.turnTotal).toEqual(0);
    expect(player1.activePlayer).toEqual(1);
  });

  test('should reset name to "" and reset diceRoll, turnTotal, currentOverallScore, activePlayer to 0',() => {
    player1.roll(5);
    player1.reset();
    expect(player1.name).toEqual("");
    expect(player1.diceRoll).toEqual(0);
    expect(player1.turnTotal).toEqual(0);
    expect(player1.currentOverallScore).toEqual(0);
    expect(player1.activePlayer).toEqual(0);  
    });

    test('should return "You win!" when surpass targeted score after a roll', () => {
      player1.currentOverallScore = 95;
      expect(player1.roll(6)).toEqual("You win!");
    });
});