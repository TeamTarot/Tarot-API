'use strict';

const mongoose = require('mongoose');

const readingsSchema = new mongoose.Schema({
  cardSet: [],
  date: {type: String},
  journal: {type: String},
});

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  // the 3 card draw
  cards: [readingsSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
