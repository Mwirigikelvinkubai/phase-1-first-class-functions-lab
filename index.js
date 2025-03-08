// Code your solution in this file!
// 1. Function that returns the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// 2. Function that returns the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// 3. Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns another function that multiplies fares
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// 5. Fare doubler function
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler function
const fareTripler = createFareMultiplier(3);

// 7. Function that takes an array of drivers and a function, then applies the function
const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
};

// Export functions for testing
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
