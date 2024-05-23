const prompt = require("prompt-sync")();
function checkWeather(temp, weather) {
  activity = "hiking";
  if (temp >= 25 && weather == "clear") {
    activity = "golf";
    return activity;
  } else if ((temp >= 10 && temp < 25) || weather == "cloudy") {
    activity = "bowling";
    return activity;
  } else {
    return activity;
  }
}

console.assert(checkWeather(5, "cloudy") === "bowling");
console.assert(checkWeather(15, "cloudy") === "bowling");
console.assert(checkWeather(26, "clear") === "golf");
console.assert(checkWeather(1, "clear") === "hiking");

const temp = +prompt("let temp = ");
const weather = prompt("let weather (clear/cloudy) = ");
console.log(checkWeather(temp, weather));
