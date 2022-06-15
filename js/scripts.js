function PigDice(name) {
  this.name = name
  this.diceRoll = 0
  this.turnTotal = 0
  this.currentOverallScore = 0;
}

PigDice.prototype.addScore = function() {
  let score = Math.trunc(Math.random() * 6) + 1;
  if (score !== 1) {
    this.turnTotal += score;
  } else {
    this.diceRoll = 1
    alert ("Your turn is over")
    return this.diceRoll
  }
}


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

