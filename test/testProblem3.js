let inventory = require("../cars");
let sortCarModel = require("../problem3");


const validate = (inventory) => {
  if (inventory) {
    console.log(sortCarModel(inventory));
  } else {
    console.log("Empty data");
  }
};


validate(inventory);
