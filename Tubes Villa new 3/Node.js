const accountSid = 'USff63e4936cf1d41a9145ac678b88c201'; // Your Twilio Account SID
const authToken = 'ZQMEM68ACAPRLV7DPF18HSGT'; // Your Twilio Auth Token

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    body: 'Hello from Twilio!',
    from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
    to: 'whatsapp:+62<your-phone-number>', // Replace with a valid phone number in E.164 format
}).then(message => console.log(message.sid))
  .catch(error => console.error('Error:', error));
