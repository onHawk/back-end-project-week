const { authenticate, protected } = require('../authenticate');

const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { users } = require('../controllers/users');
const { oneUser } = require('../controllers/oneUser');

const { newNote } = require('../controllers/newNote');
const { noteList, oneNote } = require('../controllers/noteList');

module.exports = server => {
  server.route('/api/users').get(users);
  server.route('/api/users/:id').get(oneUser);
  server.route('/api/register').post(register);
  server.route('/api/login').post(authenticate, login);

  server.route('/api/notes').get(protected, noteList);
  server.route('/api/notes/:id').get(protected, oneNote);
  server.route('/api/newnote').post(protected, newNote);
};
