let inventory = require("../cars");
let getBMWAndAudi = require('../problem6')

let updatedInventory = getBMWAndAudi(inventory);

const validate = (updatedInventory) => {
  if (!updatedInventory) {
    return "No data Found";
  } else {
    console.log(JSON.stringify(updatedInventory));
  }
};

validate(updatedInventory);
