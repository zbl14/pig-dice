```sh
Describe PigDice()
```
Test: "It should return a object called player1, contains name,  diceRoll, turnTotal and currentOverAllScore"\
Code:\
let player1 = new PigDice("Ben");\
player1;\
Expected Output: PigDice {name: 'Ben', diceRoll: 0, turnTotal: 0, currentOverallScore: 0}

Test: "It should add scor to turnTotal if the score larger than 1\
Code:\
let player1 = new PigDice("Ben");\
player1.addScore();\
Expected Output: PigDice {name: 'Ben', diceRoll: 0, turnTotal: 5, currentOverallScore: 0}

Test: "It should return the diceRoll with 1 and alert "your turn is over"\
Code:\
let player1 = new PigDice("Ben");\
player1.addScore();\
Expected Output: PigDice {name: 'Ben', diceRoll: 1, turnTotal: 5, currentOverallScore: 0}




