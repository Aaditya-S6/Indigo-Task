const kafka = require('kafka-node');

const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client);

producer.on('ready', () => console.log('Kafka Producer is connected and ready.'));
producer.on('error', (error) => console.error('Error in Kafka Producer', error));

const sendStatusUpdate = (update) => {
  const payloads = [{ topic: 'flight-status', messages: JSON.stringify(update) }];
  producer.send(payloads, (error, data) => {
    if (error) console.error('Error sending status update', error);
    else console.log('Status update sent successfully', data);
  });
};

module.exports = { sendStatusUpdate };
