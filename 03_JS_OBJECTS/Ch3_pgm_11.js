var player1;

player1 = {
    name: "Max",
    score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + player1.score *0.2;
console.log(player1.name + " has scored " + player1.score);

var player2;

player2 = {
  name : "Tanu",
  score : 10
};

console.log(player2.name + " has scored " + player2.score);
