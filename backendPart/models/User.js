const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  friends: [String],
  about: {
    city: String,
    skills: [String],
    favorites: [String],
  },
  age: String,
  img: String,
});

module.exports = model('User', userSchema);
