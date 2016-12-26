'use strict';

const uuid = require('uuid/v1');
const _ = require('lodash');

let template = function(text, timestamp, user_id) {
  return {
    id: uuid(),
    text,
    timestamp,
    user_id
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

let gentext = () => {

  let result = [];

  for (var i = 0; i < 10; i++) {
    let part = namegen(_.floor(Math.random() * 10));
    result.push(part);
  }

  return result.join(' ') + '!!!';
}

let genuser = (i) => i % 2;


function* Gen(start_time = Date.now(), step = 10000, count = 1000) {
  let time = start_time;
  for (var i = 0; i < count; i++) {
    let text = gentext();
    let user = genuser(i);

    yield new template(time, text, user);

    time += _.floor(Math.random() * step);
  }
}

module.exports = Gen;
