function PigDice(name) {
  this.name = name
  this.diceRoll = 0
  this.turnTotal = 0
  this.currentOverallScore = 0;
  this.activePlayer = "active"; 
}

PigDice.prototype.roll = function() {
  if (this.activePlayer === "active") {
    let score = Math.trunc(Math.random() * 6) + 1;
    if (score !== 1) {
      this.turnTotal += score;
      console.log('this.turnTotal: ', this.turnTotal);
      console.log('score', score);
    } else {
      this.diceRoll = 1
      this.activePlayer = "inactive";
      alert ("Your turn is over")
      return this.diceRoll
    }
  } else {
    alert ("It's not your turn yet!")
  }
}

PigDice.prototype.hold = function () {
  this.currentOverallScore += this.turnTotal
  console.log('this.currentOverallScore: ', this.currentOverallScore);
  this.turnTotal = 0
  console.log('this.turnTotal: ', this.turnTotal)
  this.activePlayer = "inactive";
  if (this.currentOverallScore >= 100) {
    alert ("Your win!")
  } 
}

PigDice.prototype.switch = function () {
  if (this.activePlayer === "inactive") {
    console.log("checked");
    this.activePlayer = "active";
    console.log("checked");
  }
}

let player1 = new PigDice("Ben", 'active')
let player2 = new PigDice("kyle", 'inactive')

// function attachContactListeners() {
//   $("#rollByOne").on("click", function() {
//     player1.addScore();
//     let player1Score = player1.currentScore
//     console.log(player1Score);
//   });
//   $("#rollByTwo").on("click", function() {
//     player2.addScore();
//     console.log(player2.currentScore)
//   });
// }

$(document).ready(function() {
  // attachContactListeners(); 
  $("form#newPlayer").submit(function(event) {
    event.preventDefault();
    const playerName = $("input#player1Name").val();

    let player = new PigDice(playerName);

    let player1Score = player1.currentScore

    $(".player1Name").html(player1.name);

    $("#rollByOne").on("click", function() {
      player1.addScore();
      console.log(player1Score);
    });
    });
});

