const User = require('../users/User.js');
const { secret } = require('../config.js');
const { makeToken } = require('../authenticate');

const login = (req, res) => {
  const { _id } = req.user;
  // console.log(req.user);
  const token = makeToken(req.user);
  User.findOne(_id)
    .populate('notes')
    .then(user => {
      // console.log(user);
      res.json({ token, user });
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = {
  login,
};
