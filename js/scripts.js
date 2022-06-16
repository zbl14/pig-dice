// Business Logics
function PigDice(name, activePlayer) {
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

//UI Logics
function reset() {
  let thePlayers = [player1Instance, player2Instance];
  thePlayers.forEach(function(player) {
      player.name = "";
      player.diceRoll = 0;
      player.turnTotal = 0;
      player.currentOverallScore = 0;
  })
  player1Instance.activePlayer = "active";
  player2Instance.activePlayer = "inactive";
  let resetOuput = [$(".player1Name"), $(".player1CurrentRoll"), $(".player1TurnTotal"), $(".player1OverallScore"), $(".player2Name"), $(".player2CurrentRoll"), $(".player2TurnTotal"), $(".player2OverallScore")]
  resetOuput.forEach(function(output){
    output.html("");
  });
}

function disableArea () {
  if (player1Instance.activePlayer === "active" && player2Instance.activePlayer === "inactive") {
    $(".player1-container").addClass("active-player-background");
    $(".player2-container").removeClass("active-player-background");
  } else {
    $(".player1-container").removeClass("active-player-background");
    $(".player2-container").addClass("active-player-background");
  }
}

$(document).ready(function() {
  $("form#newPlayer").submit(function(event) {
    event.preventDefault();
    let player1Name = $("input#player1Name").val();
    let player2Name = $("input#player2Name").val();
    player1Instance.name = player1Name;
    player2Instance.name = player2Name;
    $(".player1Name").html(player1Instance.name);
    $(".player2Name").html(player2Instance.name);
    $("#newPlayer").hide();

    $(".roll").click(function(){
      if (player1Instance.activePlayer === "active" && player2Instance.activePlayer === "inactive") {
        disableArea ()
        player1Instance.roll(); 
        $(".player1CurrentRoll").html(player1Instance.diceRoll);
        $(".player1TurnTotal").html(player1Instance.turnTotal);
        if (player1Instance.turnTotal+player1Instance.currentOverallScore >= targetedScore) {
          console.log("You win!");
          $("#victory-message-super-container").show();
          $(".winner").text(player1Instance.name);
          reset();
        } 
      } else {
        disableArea ()
        player2Instance.roll(); 
        $(".player2CurrentRoll").html(player2Instance.diceRoll);
        $(".player2TurnTotal").html(player2Instance.turnTotal);
        if (player2Instance.turnTotal+player2Instance.currentOverallScore >= targetedScore) {
          console.log("You win!");
          $("#victory-message-super-container").show();
          $(".winner").text(player2Instance.name);
          reset();
        } 
      }
    });

    $(".computer-game-roll").click(function(){
      if (player1Instance.activePlayer === "active" && player2Instance.activePlayer === "inactive") {
        disableArea ()
        player1Instance.roll(); 
        $(".player1CurrentRoll").html(player1Instance.diceRoll);
        $(".player1TurnTotal").html(player1Instance.turnTotal);
        if (player1Instance.turnTotal+player1Instance.currentOverallScore >= targetedScore) {
          console.log("You win!");
          $("#victory-message-super-container").show();
          $(".winner").text(player1Instance.name);
          reset();
        } 
      } else {
        disableArea ()
        player2Instance.roll(); 
        $(".player2CurrentRoll").html(player2Instance.diceRoll);
        $(".player2TurnTotal").html(player2Instance.turnTotal);
        if (player2Instance.turnTotal+player2Instance.currentOverallScore >= targetedScore) {
          console.log("You win!");
          $("#victory-message-super-container").show();
          $(".winner").text(player2Instance.name);
          reset();
        } 
      }
    });

    $(".hold").click(function(){
      if (player1Instance.activePlayer === "active" && player2Instance.activePlayer === "inactive") {
        player1Instance.hold();
        disableArea ()
        $(".player1OverallScore").html(player1Instance.currentOverallScore);
        console.log(player1Instance.activePlayer, player2Instance.activePlayer);
        if (player1Instance.activePlayer === "inactive" && player2Instance.activePlayer === "active" && computer-enabled-status === true) {
          player2Instance.roll();
          player2Instance.roll();
          player2Instance.hold();
        }
      } else {
        player2Instance.hold();
        disableArea ()
        $(".player2OverallScore").html(player2Instance.currentOverallScore); 
      }
    });
  });
})

// COMPLETED: Hide the form after submitting
// COMPLETED: Display the current roll
// COMPLETED: Reset the app after a player wins
// COMPLETED: Pop up victory message
// ----> Include the name of whoever wins in the victory message
// COMPLETED: Support 1 roll button and 1 hold button (switches user behind the scenes automatically)
// COMPLETED: victory-check into roll function
// COMPLETED: Clear indication of which player is currently the active player


// Computer Player Brainstorming
// UI:
// - Button to choose a computer player instead of proceeding with a human player 2.
// - Buttons to choose easy computer mode or hard computer mode

// Logic to Activate Computer Player
// User clicks activation button
// Javascript removes player 2? Or makes the computer automate player 2's existing actions?


// Business Logic
// Comptuer Player 
// - Easy Mode
// --- Computer rolls twice, no matter what, then HOLD
// - Hard Mode
// --- If turnTotal is greater than 6 --> HOLD