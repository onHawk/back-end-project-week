const Note = require('../notes/Note.js');
const User = require('../users/User.js');

const newNote = (req, res) => {
  const { title, content } = req.body;
  console.log('newnote', req.body);

  const note = new Note({ title, content });

  note
    .save()
    .then(newNote => {
      // const id = added._id;
      const { _id } = req.user;
      User.findOneAndUpdate(_id, { $addToSet: { notes: newNote._id } })
        .populate('notes')
        .then(added => {
          console.log(added);
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
