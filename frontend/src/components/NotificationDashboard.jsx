import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationsDashboard = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>Notifications Dashboard</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            {notification.channel}: {notification.status} at {new Date(notification.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsDashboard;
