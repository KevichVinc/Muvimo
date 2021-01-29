const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  friends: [String],
  city: String,
  skills: [String],
  favorites: [String],
  age: Number,
  avatar: String,
});

module.exports = model('Profile', profileSchema);
