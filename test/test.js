"use strict";

const gens = require('../index.js');
const coll = require('../collection_generator.js');
let Post = gens.post;
let post = new Post();
console.log(post)
// console.log([...post])


// for (var variable of gens.post()) {
//   console.log(variable)
// }
// for (var variable of gens.user()) {
//   console.log(variable)
// }
// for (var variable of coll()) {
//   console.log(variable)
// }
