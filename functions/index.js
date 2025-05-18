const functions = require("firebase-functions");
const twilio = require("twilio");

const accountSid = "AC7d28088f70adcdf253cb09f30014e0bd";
const authToken = "0f1e2f77ed9a2cf43870db38c9a985b0";
const fromPhone = "+8801300143398";

const client = new twilio(accountSid, authToken);

exports.sendSMS = functions.https.onRequest((req, res) => {
  const { to, message } = req.body;

  client.messages
    .create({
      body: message,
      to: to,
      from: fromPhone,
    })
    .then(() => res.json({ success: true }))
    .catch(error => res.json({ success: false, error: error.message }));
});
