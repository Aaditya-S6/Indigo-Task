const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Endpoint to set notification preferences
router.post('/preferences', async (req, res) => {
  const { email, phone, preferences } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, phone, notificationPreferences: preferences });
    } else {
      user.phone = phone;
      user.notificationPreferences = preferences;
    }
    await user.save();
    res.status(200).json({ message: 'Preferences saved successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
