const kafka = require('kafka-node');
const axios = require('axios');
const { sendSMSNotification, sendEmailNotification, sendAppNotification } = require('./notifications');

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient();
const consumer = new Consumer(client, [{ topic: 'flight-status', partition: 0 }], { autoCommit: true });

consumer.on('message', (message) => {
  const update = JSON.parse(message.value);
  console.log('Received flight status update', update);

  // Trigger notifications
  sendSMSNotification(update);
  sendEmailNotification(update);
  sendAppNotification(update);
});

consumer.on('error', (error) => console.error('Error in Kafka Consumer', error));
