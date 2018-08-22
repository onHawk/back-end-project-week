const Note = require('../notes/Note.js');
const User = require('../users/User.js');

const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  Note.findByIdAndUpdate(id, req.body, { new: true })
    .then(update => {
      console.log(update);
      res.json(update);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
module.exports = { updateNote };
