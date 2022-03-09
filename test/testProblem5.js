const inventory = require("../cars");
let car = require("../problem4");

let findOldCars = require("../problem5");

let carList = car.getCarYear(inventory);
let oldCarslist = findOldCars(carList);

const validate = (carDetails) => {
  if (!carDetails) {
    return "No data Found";
  } else {
    console.log(oldCarslist.length);
    console.log(oldCarslist);
  }
};

validate(carList);
