let inventory = require("../cars");
let sortCarModel = require("../problem3");

const validate = (test2) => {
  if (test2) {
    console.log(sortCarModel(inventory));
  } else {
    console.log("Empty data");
  }
};

validate(sortCarModel(inventory));
