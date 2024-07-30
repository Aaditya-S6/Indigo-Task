const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  notificationPreferences: {
    sms: Boolean,
    email: Boolean,
    app: Boolean,
  },
});

module.exports = mongoose.model('User', userSchema);
