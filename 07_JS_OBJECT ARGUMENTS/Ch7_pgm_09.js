var message = "We choose to go to the Moon!";

var startIndex = message.indexOf("go");
console.log(startIndex); 
var startIndexChoose = message.indexOf("choose");
var chooseWord = message.substr(startIndexChoose, "choose".length);
console.log(chooseWord); 
var lastIndex = message.lastIndexOf("oo");
console.log(lastIndex); 
