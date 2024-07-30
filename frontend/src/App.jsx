import React from 'react';
import FlightStatus from './components/FlightStatus';
import './App.css';
import FlightSearch from './components/FlightSearch';
import NotificationPreferences from './components/NotificationPrefrences';
import NotificationDashboard from './components/NotificationDashboard';

const App = () => {
  return (
    <div className="App">
      <h1>Real-Time Flight Status and Notifications System</h1>
      <FlightSearch/>
      <FlightStatus/>
      <NotificationPreferences/>
      <NotificationDashboard/>

    </div>
  );
};

export default App;
