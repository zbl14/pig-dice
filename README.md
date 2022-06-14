```sh
Describe PigDice()
```
Test: "It should return a object called player1, contains name and the intial score 0"\
Code:\
let player1 = new PigDice("Ben");\
player1;\
Expected Output: PigDice {name: 'Ben', currentScore: 0}

Test: "It should add score to currentScore if the score larger than 1, do not if the score equal to 1"\
Code:\
let player1 = new PigDice("Ben");\
player1.addScore();\
Expected Output: PigDice {name: 'Ben', currentScore: 4}


