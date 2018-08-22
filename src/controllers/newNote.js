const Note = require('../notes/Note.js');
const User = require('../users/User.js');

const newNote = (req, res) => {
  const { title, content } = req.body;

  const note = new Note({ title, content });
  const { _id } = req.user;

  note
    .save()
    .then(newNote => {
      // const id = added._id;
      console.log('newnote', newNote);
      User.findByIdAndUpdate(_id, { $addToSet: { notes: newNote._id } })
        .populate('notes')
        .then(added => {
          console.log(added, 'in post');
          res.json(added);
        })
        .catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = { newNote };
