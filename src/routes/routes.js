const { authenticate, protected } = require('../authenticate');

const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { newNote } = require('../controllers/newNote');
const { noteList } = require('../controllers/noteList');
const { users } = require('../controllers/users');
const { oneUser } = require('../controllers/oneUser');

module.exports = server => {
  server.route('/api/users').get(users);
  server.route('/api/users/:id').get(oneUser);
  server.route('/api/register').post(register);
  server.route('/api/login').post(authenticate, login);

  server.route('/api/notes').get(authenticate, noteList);
  server.route('/api/newnote').post(protected, newNote);
};
