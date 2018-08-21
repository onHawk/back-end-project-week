const User = require('../users/User.js');
const bcrypt = require('bcrypt');
const { makeToken } = require('../authenticate');

const register = (req, res) => {
  const { username, password } = req.body;

  const user = new User({ username, password });
  user
    .save()
    .then(newUser => {
      const token = makeToken(newUser);
      // console.log(token, '20');
      res.status(200).json({ token });
    })
    .catch(err => {
      console.log('USERNAME EXISTS');
      res.status(500).json(err);
    });
};

module.exports = { register };
