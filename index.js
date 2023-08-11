const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// index.js

// Your reducer function
function batteryReducer(totalBatteries, batch) {
  return totalBatteries + batch;
}

const totalBatteries = batteryBatches.reduce(batteryReducer, 0);

console.log("Total batteries:", totalBatteries);

