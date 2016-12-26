"use strict"

const _ = require('lodash');


let template = function(id, name, pic) {
  return {
    id,
    name,
    pic
  };
};

let letters = "abcdefghijklmnopqrstuvwxyz";

let namegen = (len) => {
  let result = "";
  for (let i = 0; i < len; i++) {
    let index = _.floor(Math.random() * (letters.length));
    result += letters[index];
  }
  return result;
};

let picgen = (len, parts) => {
  let plen = _.floor(len / parts);
  let result = [];

  for (var i = 0; i < parts; i++) {
    let part = namegen(plen);
    result.push(part);
  }

  return result.join('/') + '.png';
}

function* Gen(count = 100) {
  for (var i = 0; i < count; i++) {
    let name = _.capitalize(namegen(10));
    let pic = picgen(30, 3);
    yield new template(count - 1 - i, name, pic);
  }
};

module.exports = Gen;
