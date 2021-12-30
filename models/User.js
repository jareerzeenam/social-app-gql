const { model, Schema } = require('mongoose');

const userScheme = new Schema({
  username: String,
  password: String,
  email: {
    type: String,
    required: true,
  },
  createdAt: String,
});

module.exports = model('User', userScheme);
