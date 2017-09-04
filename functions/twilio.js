const twilio = require('twilio')
require('dotenv').config()

const accountSid = process.env.TWILIO_ID
const authToken = process.env.TWILIO_TOKEN

module.exports = new twilio.Twilio(accountSid, authToken)
