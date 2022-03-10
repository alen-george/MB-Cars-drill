// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

// let inventory = require('./cars')

const findOldCars = (carYearList, inventory) => {
  if (!(carYearList && inventory)) {
    return [];
  }
  let oldCars = [],
    numOfOldCars = 0;
  for (let index = 0; index < carYearList.length; index++) {
    if (parseInt(carYearList[index]) < 2000) {
      numOfOldCars++;
      oldCars.push(inventory[index]);
    }
  }

  
  return oldCars;
};

module.exports = findOldCars;
