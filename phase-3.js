const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let data = [];
  let results = [];
  let base = increment
  for (let i = 0; i < 10; i++) {
    //start clock
    let startTime = Date.now();
    
    results.push(addNums(increment));
    
    //end clock
    let endTime = Date.now();
    //prints runtime
    let key = `addNums(${increment}): ${endTime - startTime}ms`
    //data.push(`Runtime - addNums(${increment}): ${endTime - startTime}ms`)
    data.push({
      Runtime: key,
    })
    increment += base
    
  }
  //return results;
  console.log(data)
}


function addManyNums10Timing(increment) {
  let data = [];
  let results = [];
    let base = increment
    for (let i = 0; i < 10; i++) {
      let startTime = Date.now();
      results.push(addManyNums(increment));
      let endTime = Date.now();

      let key = `addManyNums(${increment}): ${endTime - startTime}ms`
    //data.push(`Runtime - addNums(${increment}): ${endTime - startTime}ms`)
    data.push({
      Runtime: key,
    })
      
      increment += base
    }
    //return results;
    console.log(data)
  

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);