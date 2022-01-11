// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = (arrDrivers) => {
    const twoDrivers = arrDrivers.slice(0,2);
    return twoDrivers;
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = (arrDrivers) => {
    const lastTwoDrivers = arrDrivers.slice(-2);
    return lastTwoDrivers;
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0](drivers), selectingDrivers[1](drivers));

function createFareMultiplier (multiplier) {
    return (fare) => fare * multiplier;
}
console.log(createFareMultiplier(5)(5));

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(4));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(4));

function selectDifferentDrivers(arrayOfDrivers, funcTwoDrivers) {
    return funcTwoDrivers(arrayOfDrivers);
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));