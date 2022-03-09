const inventory = require("../cars");
let getLastCar = require("../problem2");

const validate = (test2) => {
  if (test2) {
    console.log(getLastCar(inventory));
  } else {
    console.log("Empty");
  }
};

validate(getLastCar(inventory));
