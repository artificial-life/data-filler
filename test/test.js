"use strict";

// const gens = require('../index.js');
const coll = require('../collection_generator.js');

// console.log([...gens.post()])


// for (var variable of gens.post()) {
//   console.log(variable)
// }
// for (var variable of gens.user()) {
//   console.log(variable)
// }
for (var variable of coll()) {
  console.log(variable)
}
