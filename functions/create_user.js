const admin = require('firebase-admin')

module.exports = function (req, res) {
  // a. Verify the user provided a phone
  if (!req.body.phone) {
    // 422 UNPROCESSABLE ENTITY
    return res.status(422).send({ error: 'Bad Input' })
  }

  // b. Format the phone number to remove dashes and parens
  // [^\d] matches any non-digit character
  const phone = String(req.body.phone).replace(/[^\d]/g, '')

  // c. Create a new user account using that phone number
  admin.auth().createUser({ uid: phone })
    // d. Respond to the user request, saying the account was made
    .then(user => res.send(user))
    .catch(error => res.status(422).send({ error }))
}
