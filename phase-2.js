const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let results = [];
  let base = increment
  for (let i = 0; i < 10; i++) {
    results.push(addNums(increment));
    increment += base
  }
  return results;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let results = [];
  let base = increment
  for (let i = 0; i < 10; i++) {
    results.push(addManyNums(increment));
    increment += base
  }
  return results;

}

module.exports = [addNums10, addManyNums10];