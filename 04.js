const prompt = require("prompt-sync")();
function calculateResult(word) {
  var result;
  const wordLength = word.length;
  const squareRoot = Math.sqrt(wordLength);
  if (Number.isInteger(squareRoot)) {
    result = 1;
    return result;
  } else {
    result = 0;
    return result;
  }
}
console.assert(calculateResult("q") === 1);
console.assert(calculateResult("yes") === 0);
console.assert(calculateResult("meow") === 1);
console.assert(calculateResult("world") === 0);

const word = prompt("let word = ");
console.log(calculateResult(word));
