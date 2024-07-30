import React, { useState } from 'react';
import axios from 'axios';

const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightStatus, setFlightStatus] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/flights/${flightNumber}`);
      setFlightStatus(response.data);
    } catch (error) {
      console.error('Error fetching flight status:', error);
    }
  };

  return (
    <div>
      <h2>Search Flight</h2>
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder="Enter flight number"
      />
      <button onClick={handleSearch}>Search</button>
      {flightStatus && (
        <div>
          <h3>Flight Status</h3>
          <p>{JSON.stringify(flightStatus)}</p>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
