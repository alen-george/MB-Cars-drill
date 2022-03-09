// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

function getDataWithId(inventory, id) {
  if (!(inventory && id)) {
    return 0;
  }
  let info;

  for (let index = 0; index < inventory.length; index++) {
    if (inventory[index].id === id) {
      info = inventory[index];
    }
  }

  return info;
}

module.exports = { getDataWithId: getDataWithId };

// let carinfo = getDataWithId(inventory, 33);

// if (carinfo) {
//   console.log(
//     `Car 33 is a ${carinfo.car_year} ${carinfo.car_make} ${carinfo.car_model}`
//   );
// } else {
//   console.log("No Data Found");
// }
