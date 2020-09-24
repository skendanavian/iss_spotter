const {nextISSTimesForMyLocation} = require('./iss');

//Formats UTC time formatting to human readable time and prints the formatted string
const printPassTimes = function(passTimes) {
  console.log("\nHere are the next 5 times that the ISS will pass your location:\n")
  for (const instance of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(instance.risetime);
    const duration = instance.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  //Send the UTC time and duration array off for printing!!!
  printPassTimes(passTimes);

});






// Test Functions for each API in iss.js

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   // console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('108.60.189.229', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   // console.log('It worked! Coordinates are:', coords);
// });

// fetchISSFlyOverTimes(coords, (error, timeArray) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   // console.log('The ISS will be flying over your location at the following times:\n', timeArray);

// });


