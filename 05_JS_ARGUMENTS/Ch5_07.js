var showPlayerName;

    showPlayerName = function (playerName) {
    console.log(playerName);
};


showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName);
    console.log("The player's name has " + playerName.length + " letters.");
};

showPlayerName("Kandra");
showPlayerName("Dax");

showPlayerName("Alice");
showPlayerName("Milania");
