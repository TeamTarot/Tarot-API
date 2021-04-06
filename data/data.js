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

Data.getUser = async (req, res) => {
  const email = req.query.email;
  await User.find({ email }, function (err, user) {
    if (err) { return console.error(err) }
    // if the user doesn't have an email
    if (!user) {
      const welcome = new User({
        email: req.query.email,
        cards: []
      });
      welcome.save(() => console.log('welcome', {welcome}));
    }
    // make them a profile with everything blank except the email
    // save the user to the database
    console.log('user infos: ', user);
    res.status(200).send(user[0]);
  });
}

Data.handleAPICall = async (req, res) => {
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

// press draw 3 button
// make a call to the api for 3 cards
// user displays it in the front end
// user sees the journal entry
// user fills out journal entry
// user hits save, sends information to the server
// server then saves information into db .post

// server recieves the 3 cards
// server adds 3 card array to reading Schema
// send the array to the db .put 

Data.createAReading = async (req, res) => {
  const email = req.body.email;
  const reading = {
    // make sure this matches in the front end
    cardSet: request.body.card.cardSet,
    date: request.body.card.date,
    journal: request.body.card.journal
  };
  User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    entry.cards.push(reading);
    entry.save();
    // console.log('new push', entry.books);
    // we are sending back something, 
    response.status(200).send(entry.cards);
  });
}

Data.deleteAReading = async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id });
  res.status(200).send('successfully deleted!');
}

Data.updateAReading = async (req, res) => {
  const id = req.params.id;
  const data = req.body.journalUpdate;
  User.findByIdAndUpdate({ _id: id }, data, { new: true, useFindAndModify: false });
}

module.exports = Data;