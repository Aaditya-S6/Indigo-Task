import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightStatus = () => {
  const [flights, setFlights] = useState({});
  
  useEffect(() => {
    const fetchFlightStatuses = async () => {
      try {
        const response = await axios.get('/api/flights');
        let flightKeys = Object.keys(response.data);
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flight statuses:', error);
      }
    };

    fetchFlightStatuses();
    const interval = setInterval(fetchFlightStatuses, 60000); // Fetch every minute
    let flightKeys = Object.keys(response.data);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Flight Status</h2>
      <ul>
      {flightKeys.map(key => (
        <li key={flights[key].flightNumber}>
          Flight {flights[key].flightNumber}: {flights[key].status} - Gate {flights[key].gate}
        </li>
      ))}
        </ul>
     
    </div>
  );
};

export default FlightStatus;
