export function PigDice(name, activePlayer) {
  this.name = name;
  this.diceRoll = 0;
  this.turnTotal = 0;
  this.currentOverallScore = 0;
  this.activePlayer = activePlayer; 
}

// function randomNum () {
//   return Math.trunc(Math.random() * 6) + 1;
// };

// let randomNum = randomNum ();

PigDice.prototype.roll = function(randomNum) {
  if (this.activePlayer === "active") {
    // let randomNum = Math.trunc(Math.random() * 6) + 1;
    if (randomNum !== 1) {
      this.diceRoll = randomNum;
      console.log(this.diceRoll);
      this.turnTotal += randomNum;
      return this.diceRoll;
    } else {
      this.diceRoll = 1;
      console.log(this.diceRoll);
      this.turnTotal = 0;
      // this.switch(); // this.activePlayer === "inactive";
      // disableArea ();
      return "Your turn is over";
      // return this.diceRoll;
    }
  } else {
    return "It's not your turn yet!";
  }
};


PigDice.prototype.hold = function () {
  this.currentOverallScore += this.turnTotal;
  this.turnTotal = 0;
  return this.currentOverallScore
  // this.switch();
};

// player1Instance
let player1Instance = new PigDice("player1Name", "active");
let player2Instance = new PigDice("player2Name", "inactive");

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
};

// PigDice.prototype.switch = function() {
//   activePlayer = this.turnTotal === 0 ? "inactive" : "active"
// };