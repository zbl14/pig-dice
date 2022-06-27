import { PigDice } from './../src/js/pig-dice.js';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./css/styles.css';
import $ from 'jquery';

let player1= new PigDice("player1Name");
let player2 = new PigDice("player2Name");
player2.activePlayer = 1;

// function reset() {
//   let thePlayers = [player1, player2];
//   thePlayers.forEach(function(player) {
//     player.name = "";
//     player.diceRoll = 0;
//     player.turnTotal = 0;
//     player.currentOverallScore = 0;
//   });
//   player1.activePlayer = 0;
//   player2.activePlayer = 1;
//   let resetOuput = [$(".player1Name"), $(".player1CurrentRoll"), $(".player1TurnTotal"), $(".player1OverallScore"), $(".player2Name"), $(".player2CurrentRoll"), $(".player2TurnTotal"), $(".player2OverallScore")];
//   resetOuput.forEach(function(output){
//     output.html("");
//   });
// }

let activePlayerArea = () => {
  if (player1.activePlayer === 0 && player2.activePlayer === 1) {
    $(".player1-container").addClass("active-player-background");
    $(".player2-container").removeClass("active-player-background");
  } else {
    $(".player1-container").removeClass("active-player-background");
    $(".player2-container").addClass("active-player-background");
  }
};

$(document).ready(function() {
  $("form#newPlayer").submit(function(event) {
    event.preventDefault();
    let player1Name = $("input#player1Name").val();
    let player2Name = $("input#player2Name").val();
    player1.name = player1Name;
    player2.name = player2Name;
    $(".player1Name").html(player1.name);
    $(".player2Name").html(player2.name);
    $("#newPlayer").hide();

    $(".roll").click(function(){
      if (player1.activePlayer === 0 && player2.activePlayer === 1) {
        activePlayerArea ();
        player1.roll(player1.randomNum()); 
        $(".player1CurrentRoll").html(player1.diceRoll);
        $(".player1TurnTotal").html(player1.turnTotal);
        if (player1.activePlayer === 1) {
          player2.switch();
          activePlayerArea ();
        }
        if (player1.playing === false) {
          $("#victory-message-super-container").show();
          $(".winner").text(player1.name);
          // reset();
        } 
      } else {
        activePlayerArea ();
        player2.roll(player1.randomNum()); 
        $(".player2CurrentRoll").html(player2.diceRoll);
        $(".player2TurnTotal").html(player2.turnTotal);
        if (player2.activePlayer === 1) {
          player1.switch();
          activePlayerArea ();
        }
        if (player2.playing === false) {
          $("#victory-message-super-container").show();
          $(".winner").text(player2.name);
          // reset();
        } 
      }
    });

    $(".hold").click(function(){
      if (player1.activePlayer === 0 && player2.activePlayer === 1) {
        player1.hold();
        player2.switch();
        activePlayerArea ();
        $(".player1OverallScore").html(player1.currentOverallScore);
        console.log(`player1: ${player1.activePlayer}, player2: ${player2.activePlayer}`);
      } else {
        player2.hold();
        player1.switch();
        activePlayerArea ();
        $(".player2OverallScore").html(player2.currentOverallScore);
        console.log(`player1: ${player1.activePlayer}, player2: ${player2.activePlayer}`); 
      }
    });
  });
});


// WIP: computer mode 
// $(".computer-game-roll").click(function(){
//   if (player1Instance.activePlayer === "active" && player2Instance.activePlayer === "inactive") {
//     activePlayerArea ()
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
//     activePlayerArea ()
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