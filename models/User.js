'use strict';

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  // the 3 card draw
  fortunes: [{date:{type: String, required: true},
              cardSet: {type: Array},
              journal: {type:String}  }]
});

const User = mongoose.model('User', userSchema)

module.exports = User;







// const userSchema = new mongoose.Schema({
//   email: {type: String, required: true},
//   // nesting (don't use model)
//   fortunes: [ReadingCard]
// });