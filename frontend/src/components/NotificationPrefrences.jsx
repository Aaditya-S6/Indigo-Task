import React, { useState } from 'react';
import axios from 'axios';

const NotificationPreferences = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferences, setPreferences] = useState({
    sms: false,
    email: false,
    app: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/preferences', {
        email,
        phone,
        preferences,
      });
      alert('Preferences saved successfully!');
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };

  return (
    <div>
      <h2>Notification Preferences</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={preferences.sms}
              onChange={(e) =>
                setPreferences({ ...preferences, sms: e.target.checked })
              }
            />
            SMS Notifications
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={preferences.email}
              onChange={(e) =>
                setPreferences({ ...preferences, email: e.target.checked })
              }
            />
            Email Notifications
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={preferences.app}
              onChange={(e) =>
                setPreferences({ ...preferences, app: e.target.checked })
              }
            />
            App Notifications
          </label>
        </div>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default NotificationPreferences;
