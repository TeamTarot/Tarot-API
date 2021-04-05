'use strict';

const User = require('../models/User');

const Data = {};
require('dotenv').config();

const superagent = require('superagent');

// app.get('/user', Data.getUser);
// app.get('/draw', Data.handleAPICall);
// app.post('/reading', Data.createAReading);
// app.delete('/reading/:id', Data.deleteAReading);
// app.put('/reading/:id', Data.updateAReading);

Data.getUser = async(req, res) => {
 const email = req.query.email;
 await User.find({ email }, function (err, user) {
    if (err) return console.error(err);
    console.log('user infos: ', user);
    res.status(200).send(user[0]);
  });
}

Data.handleAPICall = async(req, res) => {
  const url = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3`;
  superagent
  .get(url)
  .then(function (superagentResults) {
    // handle 3 random cards
    const cardResults = superagentResults.body.cards;
    console.log('card results: ', cardResults);
    res.status(200).send(cardResults);
  })
  .catch(function (error) {
    console.log('something went wrong with superagent call in movies');
    res.status(500).send('we messed up');
  })
}

Data.createAReading = async(req, res) => {
  
}

Data.deleteAReading = async(req, res) => {
  const id = req.params.id;
  await User.deleteOne({_id:id});
  res.status(200).send('successfully deleted!');
}

Data.updateAReading = async(req, res) => {
  
}

module.exports = Data;