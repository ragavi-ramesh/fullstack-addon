var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth, playerHealthMultiplier) {
    var modifiedHealth = playerHealth * playerHealthMultiplier;
    console.log(playerName + " has health " + modifiedHealth);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier: 1.5  // Example multiplier
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier: 1.2  // Example multiplier
};

showPlayerHealth(player1.name, player1.health, player1.healthMultiplier);
showPlayerHealth(player2.name, player2.health, player2.healthMultiplier);
