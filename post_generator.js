'use strict';

const uuid = require('uuid/v1');
const _ = require('lodash');

let template = function(text, timestamp, user_id, group_id) {
  return {
    id: uuid(),
    text,
    timestamp,
    user_id,
    group_id
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




class Gen {
  constructor() {
    this.groups_count = 10;
    this.prosts_count = 1000;
    this.start_time = Date.now();
    this.time_step = 10000;
    this.users_count = 1000;
  }
  step(value) {
    this.time_step = value;
    return this;
  }
  users(value) {
    this.users_count = value;
    return this;
  }
  start(value) {
    this.start_time = value;
    return this;
  }
  count(value) {
    this.prosts_count = value;
    return this;
  }
  groups(value) {
    this.groups_count = value;
    return this;
  }

  *[Symbol.Iterator]() {
    let time = this.start_time;
    for (var i = 0; i < this.prosts_count; i++) {
      let text = gentext();
      let user = _.random(this.users_count);
      let group = _.random(this.groups_count);

      yield new template(text, time, user, group);

      time += _.floor(Math.random() * this.time_step);
    }
  }
}


module.exports = Gen;
