// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

let inventory = require('./cars')


const getCarYear = (inventory) => {
    let carYear = [];
    
    for (let index=0;index < inventory.length; index++){

        carYear.push(inventory[index].car_year);

    }

    return carYear
}

let carYearList = getCarYear(inventory)
console.log(carYearList)

module.exports = carYearList;
