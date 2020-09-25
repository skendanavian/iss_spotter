const {nextISSTimesForMyLocation} = require('./iss_promised');


const printPassTimes = function(passTimes) {
  console.log("\nHere are the next 5 times that the ISS will pass your location:\n")
  for (const instance of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(instance.risetime);
    const duration = instance.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  }).catch((error) => {
    console.log("It didn't work: ", error.message)
  })