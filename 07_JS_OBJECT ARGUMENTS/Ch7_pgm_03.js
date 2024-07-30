var buildCar = function (make, model, year, color, price) {
 return {
        make: make,
        model: model,
        year: year,
        color: color,
        price: price
};
};

var getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + " (" + car.color + ")";
};
var car1 = buildCar("Toyota", "Camry", 2023, "Silver", 25000);
var car2 = buildCar("Tesla", "Model 3", 2024, "Red", 45000);
var car3 = buildCar("Bolero", "F-150", 2022, "Black", 35000);
console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
console.log(getCarInfo(car3));
