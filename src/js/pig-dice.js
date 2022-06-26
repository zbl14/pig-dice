export function PigDice(name) {
  this.name = name;
  this.diceRoll = 0;
  this.turnTotal = 0;
  this.currentOverallScore = 0;
  this.activePlayer = 0; 
}

PigDice.prototype.roll = function() {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  if (randomNum !== 1) {
    this.diceRoll = randomNum;
    this.turnTotal += randomNum;
  } else {
    this.diceRoll = 1;
    this.turnTotal = 0;
  }
};

PigDice.prototype.hold = function () {
  this.currentOverallScore += this.turnTotal;
  this.diceRoll = 0;
  this.turnTotal = 0;
  this.activePlayer = 1;
  return this.currentOverallScore
};

PigDice.prototype.switch = function() {
  this.activePlayer = this.activePlayer === 0 ? 1 : 0;
};

// player1Instance
// let player1Instance = new PigDice("player1Name", "active");
// let player2Instance = new PigDice("player2Name", "inactive");

// PigDice.prototype.switch = function () {
//   let currentlyActivePlayer;
//   let currentlyWaitingPlayer;
//   if (player1Instance.activePlayer === "active") {
//     currentlyActivePlayer = player1Instance;
//     currentlyWaitingPlayer = player2Instance;
//   } else {
//     currentlyActivePlayer = player2Instance;
//     currentlyWaitingPlayer = player1Instance;
//   }
//   currentlyActivePlayer.activePlayer = "inactive";
//   currentlyWaitingPlayer.activePlayer = "active";
//   console.log('currentlyActivePlayer: ', currentlyActivePlayer);
//   console.log('currentlyWaitingPlayer: ', currentlyWaitingPlayer); 
// };
