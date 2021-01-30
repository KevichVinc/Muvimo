const express = require('express');
const Profile = require('../models/profile');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json({ profiles });
  } catch {
    res.sendStatus(404);
  }
});
router.delete('/delete', async (req, res) => {
  try {
    await Profile.deleteOne({ _id: req.body.id });
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);
    res.json({ profile });
  } catch {
    res.sendStatus(404);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { profile } = req.body;
    await Profile.create({
      firstName: profile.firstName,
      lastName: profile.lastName,
      age: profile.age,
      city: profile.city,
      skills: profile.skills,
      favorites: profile.favorites,
      avatar: profile.avatar,
    });
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

router.post('/edit', async (req, res) => {
  try {
    const { profile } = req.body;
    await Profile.updateOne(
      { _id: profile.id },
      {
        firstName: profile.firstName,
        lastName: profile.lastName,
        age: profile.age,
        city: profile.city,
        skills: profile.skills,
        favorites: profile.favorites,
        avatar: profile.avatar,
      },
    );
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

module.exports = router;
