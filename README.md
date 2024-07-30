# Indigo Task
 # Real-Time Flight Status and Notifications System

This project is a  application for a Real-Time Flight Status and Notifications System. It allows users to search for flight statuses, view real-time updates, manage notification preferences, and monitor notifications through a dashboard.

## Approach

### Components
- **FlightSearch**: Allows users to search for flight statuses by flight number.
- **FlightStatus**: Displays the current status of all flights.
- **NotificationPreferences**: Allows users to set their notification preferences (SMS, Email, App).
- **NotificationsDashboard**: Displays a dashboard of all notifications sent to users.

### State Management and API Integration
- **State Initialization**: The state variables are initialized to ensure they start with the correct data types (e.g., arrays, objects).
- **API Calls**: The `axios` library is used to fetch data from the backend API. Error handling is implemented to manage cases where the API call fails or returns unexpected data.
- **Data Handling**: Responses from the API are checked to ensure they are arrays before updating the state. This prevents runtime errors and ensures the components function correctly.

### Real-Time Updates
- **Polling**: The `FlightStatus` component fetches flight statuses every minute using `setInterval` to simulate real-time updates.

## Running the Frontend Project

### Prerequisites
- **Node.js and npm**: Installed on your machine.
- **Backend API server running**: (You can find the backend project setup in a separate repository).


