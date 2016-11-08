'use strict'

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type:String,
    require:true
  },
  firstname:String,
  lastname: String
});

module.exports = mongoose.model('User', userSchema);
