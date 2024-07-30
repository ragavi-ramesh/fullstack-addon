var planet = "Earth";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);
var getBig = function (str) {
    return str.toUpperCase();
};
var getSmall = function (str) {
    return str.toLowerCase();
};
var word = "Hello";
console.log(getBig(word));
console.log(getSmall(word));
