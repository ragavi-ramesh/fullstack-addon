var planet1;
var planet2;
var getPlanetInfo;

planet1 = {
    name: "Saturn",
    position: 5,
    type: "Ring",
    radius: 69911,
    sizeRank: 1
};

planet2 = {
    name: "Mars",
    position: 4,
    type: "Terrestrial",
    radius: 3389,
    sizeRank: 4
};
getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position +
        ", type: " + planet.type +
        ", radius: " + planet.radius + " km";
};
console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
