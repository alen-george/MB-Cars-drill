const inventory = require("../cars");
let car = require("../problem4");

let findOldCars = require("../problem5");

let carList = car.getCarYear(inventory);
let oldCarslist = findOldCars(carList,inventory);

const validate = (carDetails) => {
  if (!carDetails) {
    return "No data Found";
  } else {
    console.log(carDetails.length);
    console.log(carDetails);
  }
};

validate(oldCarslist);
