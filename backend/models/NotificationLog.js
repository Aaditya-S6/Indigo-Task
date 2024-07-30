const mongoose = require('mongoose');

const notificationLogSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  flightId: mongoose.Schema.Types.ObjectId,
  channel: String,
  status: String,
  timestamp: Date,
});

module.exports = mongoose.model('NotificationLog', notificationLogSchema);
