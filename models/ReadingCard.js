'use strict'

const mongoose = require('mongoose');
const readingSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true}
});

const ReadingCard = mongoose.model('Reading', readingSchema);

module.exports = ReadingCard;