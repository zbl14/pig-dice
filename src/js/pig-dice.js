export class PigDice {
  constructor(name) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.currentOverallScore = 0;
    this.activePlayer = 0;
  }
  
  randomNum() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  
  roll(num) {
    if (num !== 1) {
      this.diceRoll = num;
      this.turnTotal += num;
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