
const inventory = require('../cars')
let test1 = require('../problem1')

let getDataWithId = test1.getDataWithId
 
// console.log(getDataWithId(inventory,34))
let carinfo = getDataWithId(inventory, );

if (carinfo) {
  console.log(
    `Car ${carinfo.id} is a ${carinfo.car_year} ${carinfo.car_make} ${carinfo.car_model}`
  );
} else {
  console.log("No Data Found / Argument missing");
}