const admin = require('firebase-admin')
const functions = require('firebase-functions')
const createUser = require('./create_user')

const serviceAccount = require('path/to/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://one-time-password-9cc06.firebaseio.com'
})

exports.createUser = functions.https.onRequest(createUser)
