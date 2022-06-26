export class PigDice {
  constructor(name) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.currentOverallScore = 0;
    this.activePlayer = 0;
  }
  roll() {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    if (randomNum !== 1) {
      this.diceRoll = randomNum;
      this.turnTotal += randomNum;
    } else {
      this.diceRoll = 1;
      this.turnTotal = 0;
    }
  }
  hold() {
    this.currentOverallScore += this.turnTotal;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.activePlayer = 1;
    return this.currentOverallScore;
  }
  switch() {
    this.activePlayer = this.activePlayer === 0 ? 1 : 0;
  }
}