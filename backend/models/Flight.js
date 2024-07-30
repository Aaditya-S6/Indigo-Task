const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  departure: String,
  arrival: String,
  status: String,
  gate: String,
});

module.exports = mongoose.model('Flight', flightSchema);
