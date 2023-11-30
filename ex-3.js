//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

lightBulbStatus === "Off"
  ? (lightBulbStatus = "Light bulb is Off.")
  : lightBulbStatus === "On"
  ? (lightBulbStatus = "Light bulb is On.")
  : (lightBulbStatus = "Please choose the correct input(On/Off).");

console.log(lightBulbStatus);
