const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const flightRoutes = require('./routes/flights');
const userRoutes = require('./routes/users');
const notificationRoutes = require('./routes/notifications');

const app = express();

app.use(bodyParser.json());

app.use('/api/flights', flightRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notifications', notificationRoutes);

mongoose.connect('mongodb://localhost/flightstatus', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(3000, () => console.log('Server running on port 3000'));
