var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);


var cube;

cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube;
  console.log(numberToCube + "*" + numberToCube + "=" + result);
};

cube(5);
cube(-3);
cube(1111);
cube(0.5);

var squareRoot = function (number) {
    var result = Math.sqrt(number);
    console.log("The square root of " + number + " is " + result);
};
  squareRoot(10);
  squareRoot(-2);
  squareRoot(1111);
  squareRoot(0.5);
