var findTotal;
var displayMenu;

var number1;
var number2;
var result;

number1= 15;
number2= 10;

findTotal = function () {
	result = number1 + number2;
    return result;
};

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

console.log("The value of result is:", findTotal());

displayMenu();

