const axios = require('axios');
const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');

// Configure Twilio
const twilioClient = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

// Configure SendGrid
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

const sendSMSNotification = async (update) => {
  try {
    const user = await axios.get(`/api/users/${update.userId}`);
    if (user.data.notificationPreferences.sms) {
      const message = `Flight ${update.flightNumber} is now ${update.status}. Gate: ${update.gate}`;
      await twilioClient.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: user.data.phone,
      });
      console.log('SMS notification sent for update:', update);
    }
  } catch (error) {
    console.error('Error sending SMS notification:', error);
  }
};

const sendEmailNotification = async (update) => {
  try {
    const user = await axios.get(`/api/users/${update.userId}`);
    if (user.data.notificationPreferences.email) {
      const msg = {
        to: user.data.email,
        from: 'noreply@flightstatus.com',
        subject: `Flight ${update.flightNumber} Status Update`,
        text: `Flight ${update.flightNumber} is now ${update.status}. Gate: ${update.gate}`,
      };
      await sgMail.send(msg);
      console.log('Email notification sent for update:', update);
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
};

const sendAppNotification = async (update) => {
  try {
    const user = await axios.get(`/api/users/${update.userId}`);
    if (user.data.notificationPreferences.app) {
      const message = {
        userId: user.data._id,
        title: `Flight ${update.flightNumber} Status Update`,
        body: `Flight ${update.flightNumber} is now ${update.status}. Gate: ${update.gate}`,
      };
      await axios.post('https://api.pushnotificationservice.com/send', message);
      console.log('App notification sent for update:', update);
    }
  } catch (error) {
    console.error('Error sending app notification:', error);
  }
};

module.exports = { sendSMSNotification, sendEmailNotification, sendAppNotification };
