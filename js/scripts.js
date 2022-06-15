// Business Logics
function PigDice(name, activePlayer) {
  this.name = name
  this.diceRoll = 0
  this.turnTotal = 0
  this.currentOverallScore = 0;
  this.activePlayer = activePlayer; 
}

let player1Instance = new PigDice("player1Name", "active");
let player2Instance = new PigDice("player2Name", "inactive");

PigDice.prototype.roll = function() {
  if (this.activePlayer === "active") {
    let score = Math.trunc(Math.random() * 6) + 1;
    if (score !== 1) {
      this.diceRoll = score;
      console.log(this.diceRoll)
      this.turnTotal += score;
      return this.diceRoll;
    } else {
      this.diceRoll = 1;
      console.log(this.diceRoll)
      this.turnTotal = 0;
      this.switch();
      alert ("Your turn is over");
      return this.diceRoll;
    }
  } else {
    alert ("It's not your turn yet!");
  }
}

PigDice.prototype.hold = function () {
  this.currentOverallScore += this.turnTotal;
  this.turnTotal = 0;
  this.switch();
  if (this.currentOverallScore >= 100) {
    alert ("Your win!");
  } 
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
}



// player1Instance.name;
// player1Instance.activePlayer;

//UI Logics
$(document).ready(function() {
  $("form#newPlayer").submit(function(event) {
    event.preventDefault();
    let player1Name = $("input#player1Name").val();
    let player2Name = $("input#player2Name").val();
    player1Instance.name = player1Name;
    player2Instance.name = player2Name;
    $(".player1Name").html(player1Instance.name);
    $(".player2Name").html(player2Instance.name);
    // $(".player1CurrentRoll").html(player1Instance.diceRoll);
    // $(".player2CurrentRoll").html(player2Instance.diceRoll);
    // $(".player1TurnTotal").html(player1Instance.turnTotal);
    // $(".player1OverallScore").html(player1Instance.currentOverallScore);
    // $(".player2TurnTotal").html(player2Instance.turnTotal);
    // $(".player2OverallScore").html(player2Instance.currentOverallScore);
    $('#rollByOne').click(function() { 
      player1Instance.roll(); 
      $(".player1TurnTotal").html(player1Instance.turnTotal); 
      $(".player1CurrentRoll").html(player1Instance.diceRoll);
    });
    $('#rollByTwo').click(function() {
      player2Instance.roll(); 
      $(".player2TurnTotal").html(player2Instance.turnTotal);
      $(".player2CurrentRoll").html(player2Instance.diceRoll); 
    });
    $('#holdByOne').click(function() { 
      player1Instance.hold();
      $(".player1OverallScore").html(player1Instance.currentOverallScore); 
    });
    $('#holdByTwo').click(function() { 
      player2Instance.hold();
      $(".player2OverallScore").html(player2Instance.currentOverallScore); 
    });
  });
})

// Display the current roll
// Reset the app after a player wins
// --> Pop up victory message
// Support 1 roll button and 1 hold button (switches user behind the scenes automatically)