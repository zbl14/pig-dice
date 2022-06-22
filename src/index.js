import { PigDice } from './Pig-dice.js';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./css/styles.css';
import $ from 'jquery';

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

    // WIP: computer mode 
    // $(".computer-game-roll").click(function(){
    //   if (player1Instance.activePlayer === "active" && player2Instance.activePlayer === "inactive") {
    //     disableArea ()
    //     player1Instance.roll(); 
    //     $(".player1CurrentRoll").html(player1Instance.diceRoll);
    //     $(".player1TurnTotal").html(player1Instance.turnTotal);
    //     if (player1Instance.turnTotal+player1Instance.currentOverallScore >= targetedScore) {
    //       console.log("You win!");
    //       $("#victory-message-super-container").show();
    //       $(".winner").text(player1Instance.name);
    //       reset();
    //     } 
    //   } else {
    //     disableArea ()
    //     player2Instance.roll(); 
    //     $(".player2CurrentRoll").html(player2Instance.diceRoll);
    //     $(".player2TurnTotal").html(player2Instance.turnTotal);
    //     if (player2Instance.turnTotal+player2Instance.currentOverallScore >= targetedScore) {
    //       console.log("You win!");
    //       $("#victory-message-super-container").show();
    //       $(".winner").text(player2Instance.name);
    //       reset();
    //     } 
    //   }
    // });

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