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
router.post('/delete', async (req, res) => {
  try {
    await Profile.deleteOne({ id: req.body.id });
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findOne({
      id,
    });
    res.json({ profile });
  } catch {
    res.sendStatus(404);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { profile } = req.body;
    await Profile.create({
      id: Math.random(),
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
      { id: profile.id },
      {
        firstName: profile.firstName,
        lastName: profile.lastName,
        age: profile.age,
        city: profile.city,
        skills: profile.skills,
        favorites: profile.favorites,
        avatar: profile.img,
      },
    );
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

module.exports = router;
