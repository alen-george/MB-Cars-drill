const inventory = require("../cars");
const getCar = require('../problem4')



let carYearList = getCar.getCarYear(inventory);


const validate = (test2) => {
    if (test2) {
      console.log(carYearList);
    } else {
      console.log("Empty");
    }
  };
  
validate(carYearList);
