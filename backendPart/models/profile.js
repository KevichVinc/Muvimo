const normalize = require('normalize-mongoose');
const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  friends: [String],
  city: String,
  skills: [String],
  favorites: [String],
  age: Number,
  avatar: String,
});

profileSchema.plugin(normalize);

module.exports = model('Profile', profileSchema);
