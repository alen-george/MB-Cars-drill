// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const sortCarModel = (inventory) => {
  if (!inventory) {
    return 0;
  }
  let carModelName = [];

  for (let index = 0; index < inventory.length; index++) {
    carModelName.push(inventory[index].car_model);
  }

  carModelName.sort((a, b) => {
    if (a.toUpperCase() < b.toUpperCase()) {
      return -1;
    } else if (b.toUpperCase() > a.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  });
  return carModelName;
};

module.exports = sortCarModel;
