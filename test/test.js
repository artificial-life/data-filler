"use strict";

const gens = require('../index.js');

// console.log([...gens.post()])


for (var variable of gens.post()) {
  console.log(variable)
}
// for (var variable of gens.user()) {
//   console.log(variable)
// }
