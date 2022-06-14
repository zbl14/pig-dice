function PigDice(name) {
  this.name = name
  this.currentScore = 0;
}

PigDice.prototype.addScore = function() {
  let score = Math.floor(Math.random() * 6) + 1;
  if (score === 1) {
    this.currentScore = this.currentScore;
  } else {
    this.currentScore = this.currentScore + score;
  }
}



$(document).ready(function() {
  attachContactListeners(); 
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const player1Name = $("input#player1Name").val();
    const player2Name = $("input#player2Name").val();
    const player1Score =;
    const player2Score =;
    let player1 = new PigDice(player1Name);
    let player2 = new PigDice(player1Name);
    player1.addScore();
    player2.addScore();
  });
});

