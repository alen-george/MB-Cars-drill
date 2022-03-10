// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const sortCarModel = (inventory) => {
  if (!inventory) {
    return [];
  }
  inventory.sort((a, b) => {
    if (a.car_model.toUpperCase() < b.car_model.toUpperCase()) {
      return -1;
    } else if (b.car_model.toUpperCase() > a.car_model.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  });
  return inventory;
};

// console.log(inventory)

module.exports = sortCarModel;
