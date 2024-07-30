const express = require('express');
const Flight = require('../models/Flight');
const router = express.Router();

// Mock data for development
const mockData = [
   {flightNumber: 'AA123', departure: 'JFK', arrival: 'LAX', status: 'On-Time', gate: '22A' },
  { flightNumber: 'BA456', departure: 'LHR', arrival: 'JFK', status: 'Delayed', gate: '14B' },
  // Add more mock flights as needed
];

// Endpoint to get flight status by flight number
router.get('/:flightNumber', async (req, res) => {
  try {
    const flight = await Flight.findOne({ flightNumber: req.params.flightNumber });
    if (flight) {
      res.json(flight);
    } else {
      // Use mock data if no flight found in DB
      const mockFlight = mockData.find(f => f.flightNumber === req.params.flightNumber);
      if (mockFlight) {
        res.json(mockFlight);
      } else {
        res.status(404).json({ message: 'Flight not found' });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to get all flights
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
