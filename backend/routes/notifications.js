const express = require('express');
const NotificationLog = require('../models/NotificationLog');
const router = express.Router();

// Endpoint to get notification logs
router.get('/', async (req, res) => {
  try {
    const logs = await NotificationLog.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
