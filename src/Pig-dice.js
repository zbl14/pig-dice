export function PigDice(name, activePlayer) {
  this.name = name;
  this.diceRoll = 0;
  this.turnTotal = 0;
  this.currentOverallScore = 0;
  this.activePlayer = activePlayer; 
}

let player1Instance = new PigDice("player1Name", "active");
let player2Instance = new PigDice("player2Name", "inactive");
let targetedScore = 10;

PigDice.prototype.roll = function() {
  if (this.activePlayer === "active") {
    let score = Math.trunc(Math.random() * 6) + 1;
    if (score !== 1) {
      this.diceRoll = score;
      console.log(this.diceRoll);
      this.turnTotal += score;
      // return this.diceRoll;
    } else {
      this.diceRoll = 1;
      console.log(this.diceRoll);
      this.turnTotal = 0;
      this.switch();
      disableArea ();
      alert ("Your turn is over");
      // return this.diceRoll;
    }
  } else {
    alert ("It's not your turn yet!");
  }
}

PigDice.prototype.hold = function () {
  this.currentOverallScore += this.turnTotal;
  this.turnTotal = 0;
  this.switch();
}

PigDice.prototype.switch = function () {
  let currentlyActivePlayer;
  let currentlyWaitingPlayer;
  if (player1Instance.activePlayer === "active") {
    currentlyActivePlayer = player1Instance;
    currentlyWaitingPlayer = player2Instance;
  } else {
    currentlyActivePlayer = player2Instance;
    currentlyWaitingPlayer = player1Instance;
  }
  currentlyActivePlayer.activePlayer = "inactive";
  currentlyWaitingPlayer.activePlayer = "active";
console.log('currentlyActivePlayer: ', currentlyActivePlayer);
console.log('currentlyWaitingPlayer: ', currentlyWaitingPlayer); 
}