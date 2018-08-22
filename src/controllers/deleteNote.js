const Note = require('../notes/Note.js');
const User = require('../users/User.js');

const deleteNote = (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  // console.log(req.user);
  User.findOneAndUpdate(_id, { $pull: { notes: id } })
    .populate('notes')
    .then(note => {
      Note.findByIdAndRemove(id)
        .then(response => {
          // .populate('notes')
          console.log(note);
          res.json(response);
        })
        .catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      re.send(err);
    });
};

module.exports = { deleteNote };
