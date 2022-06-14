function PigDice(name) {
  this.name = name
  this.currentScore = 0;
}

PigDice.prototype.addScore = function() {
  let score = Math.floor(Math.random() * 6) + 1;
  if (score === 1) {
    this.currentScore = this.currentScore;
  } else {
    this.currentScore = this.currentScore + score;
  }
}

let player1 = new PigDice("Ben");


