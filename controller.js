'use strict';

const Models = require('./models').models;
const Message = Models.Message;
const User = Models.User;

exports.getLatest = function* (next) {
  this.type = 'json';
  try {
    const msgs = yield Message.find().sort({timestamp: -1}).limit(5);
    this.body = msgs;
  } catch (err) {
    console.log(err);
    this.status = 500;
    this.body = err;
  }
};

exports.post = function* (next) {
  let data = { content: this.request.body.content, timestamp: Date.now() };
  var message = new Message(data);
  try {
    yield message.save();
    this.body = data;
  } catch (err) {
    this.status = 500;
    this.body = err;
  }
};

exports.login = function* (next) {
  this.type = 'json';
  try {
    const users = yield User.find();
    this.body = users;
  } catch (err) {
    console.log(err);
    this.status = 500;
    this.body = err;
  }
};

exports.signup = function* (next) {
  let body = this.request.body;
  let data = { username: body.username, password:body.password };
  this.body = 'So you want to sign up';
};
