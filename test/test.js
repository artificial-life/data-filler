"use strict";

const gens = require('../index.js');
const coll = require('../collection_generator.js');
let Post = gens.post;
let post = new Post();


post.groups(1000)
  .count(10000000)
  .wordsCount(100)
  .users(100000);

for (var variable of post) {
  console.log(variable)
}
// for (var variable of gens.user()) {
//   console.log(variable)
// }
// for (var variable of coll()) {
//   console.log(variable)
// }
