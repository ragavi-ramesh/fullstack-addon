var showLine = function(length, character) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += character;
    }
    console.log(line);
};
var showPlayerNameInBox = function(playerName) {
    showLine(playerName.length + 4, '*'); 
    console.log(" * " + playerName + " * ");
    showLine(playerName.length + 4, '*');
};

showPlayerNameInBox("Kandra");
showPlayerNameInBox("Dax");
