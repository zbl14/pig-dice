// Business Logics
function PigDice(name, activePlayer) {
  this.name = name
  this.diceRoll = 0
  this.turnTotal = 0
  this.currentOverallScore = 0;
  this.activePlayer = activePlayer; 
}

PigDice.prototype.roll = function() {
  if (this.activePlayer === "active") {
    let score = Math.trunc(Math.random() * 6) + 1;
    if (score !== 1) {
      this.turnTotal += score;
      console.log('this.turnTotal: ', this.turnTotal);
      console.log('score', score);
    } else {
      this.diceRoll = 1;
      this.turnTotal = 0;
      //*** */ this.switch();
      // this.activePlayer = "inactive";
      alert ("Your turn is over");
      return this.diceRoll;
    }
  } else {
    alert ("It's not your turn yet!");
  }
}

PigDice.prototype.hold = function () {
  this.currentOverallScore += this.turnTotal;
  console.log('this.currentOverallScore: ', this.currentOverallScore);
  this.turnTotal = 0;
  console.log('this.turnTotal: ', this.turnTotal);
  //*** */ this.switch();
  // this.activePlayer = "inactive";
  if (this.currentOverallScore >= 100) {
    alert ("Your win!");
  } 
}

PigDice.prototype.switch = function () {
  if (this.activePlayer === "inactive") {
    console.log("checked");
    this.activePlayer = "active";
    console.log("checked");
  }
}

//UI Logics
$(document).ready(function() {
  $("form#newPlayer").submit(function(event) {
    event.preventDefault();
    let player1Name = $("input#player1Name").val();
    let player2Name = $("input#player2Name").val();
    let player1 = new PigDice(player1Name, "active");
    let player2 = new PigDice(player2Name, "inactive");
    $(".player1Name").html(player1.name);
    $(".player2Name").html(player2.name);
    $(".player1TurnTotal").html(player1.turnTotal);
    $(".player1OverallScore").html(player1.currentOverallScore);
    $(".player2TurnTotal").html(player2.turnTotal);
    $(".player2OverallScore").html(player2.currentOverallScore);
 
    $('#rollByOne').click(function() { 
      // if (player2.activePlayer === "inactive") {
        // console.log(player1.activePlayer, player2.activePlayer )
        // player1.switch();
        // console.log(player1.activePlayer, player2.activePlayer )
        player1.roll(); 
        // console.log(player1.activePlayer, player2.activePlayer )
        $(".player1TurnTotal").html(player1.turnTotal); 
      // }
    });
    $('#rollByTwo').click(function() {
      // if (player1.activePlayer === "inactive") {
        // player2.switch();
        player2.roll(); 
      $(".player2TurnTotal").html(player2.turnTotal); 
      // } 
    });
    $('#holdByOne').click(function() { 
      // console.log(player1.activePlayer, player2.activePlayer )
      player1.hold();
      // console.log(player1.activePlayer, player2.activePlayer )
      $(".player1OverallScore").html(player1.currentOverallScore); 
    });
    $('#holdByTwo').click(function() { 
      player2.hold();
      $(".player2OverallScore").html(player2.currentOverallScore); 
    });
  });
})

