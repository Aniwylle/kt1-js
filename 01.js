const prompt = require("prompt-sync")();
function transAndPrice(range, price) {
  switch (range) {
    case "month":
      return `${price} Р в месяц`;
    case "day":
      return `${price} Р в день`;
    case "week":
      return `${price} Р в неделю`;
    default:
      return "неверно введено значение";
  }
}
console.assert(transAndPrice("month", 100) === "100 Р в месяц");
console.assert(transAndPrice("day", 100) === "100 Р в день");
console.assert(transAndPrice("week", 100) === "100 Р в неделю");
console.assert(transAndPrice("NOPE", 100) === "неверно введено значение");

const price = +prompt("let price = ");
const range = prompt("month/day/week ");
console.log(transAndPrice(range, price));
