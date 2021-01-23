const express = require('express');
// const { number } = require('prop-types');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  const profiles = await User.find();
  res.json({ profiles });
});

router.post('/new', async (req, res) => {
  await User.create({
    firstName: req.body.currentUserForm.firstNameInput,
    lastName: req.body.currentUserForm.lastNameInput,
    age: req.body.currentUserForm.ageInput,
    about: {
      city: req.body.currentUserForm.about.cityInput,
      skills: req.body.currentUserForm.about.skillsInput,
      favorites: req.body.currentUserForm.about.favoritesInput,
    },
    img: req.body.currentUserForm.imgInput,
  });
  res.send(200);
});

module.exports = router;
