"use strict"

const _ = require('lodash');

let types = ['first', 'second', 'third'];

let letters_v = "aeiouy";
let letters_c = "bcdfghjklmnpqrstvwxz";

let namegen = (len) => {
  let result = "";
  for (let i = 0; i < len; i++) {

    let letters = (i % 2) && (_.random(100) < 90) ? letters_c : letters_v;

    let index = _.floor(Math.random() * (letters.length));
    result += letters[index];
  }
  return result;
};

let longnamegen = () => _.capitalize(namegen(_.random(5, 10))) + ' ' + _.capitalize(namegen(_.random(5, 10)));

let genprops = (count) => {
  let result = {};
  for (var i = 0; i < count; i++) {
    let propname = namegen(_.random(6, 10));
    result[propname] = _.random(100);
  }

  return result;
};

let item = function() {
  let name = longnamegen();
  let props = genprops(_.random(1, 5));

  return {
    name,
    type: _.sample(types),
    properties: props
  }
}



function* Gen(count = 100) {
  for (var i = 0; i < count; i++) {
    yield new item();
  }
};

module.exports = Gen;
