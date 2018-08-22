const Note = require('../notes/Note.js');
const User = require('../users/User.js');

const noteList = (req, res) => {
  const { notes } = req.user;
  res.json(notes);
};

const oneNote = (req, res) => {
  const { id } = req.params;
  Note.findById(id).then(found => {
    console.log(found);
    res.send(found);
  });
};

module.exports = { noteList, oneNote };
