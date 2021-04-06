'use strict';

const mongoose = require('mongoose');
const readering = require('./ReadingCard')

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  // the 3 card draw
  cards: [readering]
});

const User = mongoose.model('User', userSchema);

module.exports = User;