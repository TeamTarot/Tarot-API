'use strict'

const mongoose = require('mongoose');
const readingSchema = new mongoose.Schema({
    date: {type: String, required: true},
    cardSet: [{type: Object}],
    Journal: {type: String},
});

const ReadingCard = mongoose.model('Reading', readingSchema);

module.exports = ReadingCard;