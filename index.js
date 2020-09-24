const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('108.60.189.229', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Coordinates are:", coords);
// });

fetchISSFlyOverTimes({latitude: '53.36670', longitude: '-104.01670'}, (error, timeArray) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('The ISS will be flying over your location at the following times:\n', timeArray);

});


