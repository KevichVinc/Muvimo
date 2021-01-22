const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  friends: [String],
  age: { type: Number, required: true },
  img: String,
});

module.exports = model('User', userSchema);
