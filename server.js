'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const superagent = require('superagent');

const Data = require('./data/data');

const app = express();
const PORT = process.env.PORT || 3002;
const DATABASE = process.env.DATABASE_URL;

const mongoose = require('mongoose');

mongoose.connect(`${DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to the database!');
});

app.use(cors());

app.use(express.json());

// routes and functions
app.get('/user', Data.getUser);
app.get('/draw', Data.handleAPICall);
app.post('/reading', Data.createAReading);
app.delete('/reading/:id', Data.deleteAReading);
app.put('/reading/:id', Data.updateAReading);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
