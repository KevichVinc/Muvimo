const express = require('express');
const Profile = require('../models/profile');
const validation = require('../validate/name');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json({ profiles });
  } catch {
    res.sendStatus(404);
  }
});
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Profile.findByIdAndDelete(id);
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
router.get('/find/:firstName', async (req, res) => {
  try {
    const { firstName } = req.params;
    const profiles = await Profile.find({ firstName });
    res.json({ profiles });
  } catch {
    res.sendStatus(404);
  }
});

router.post('/new', async (req, res) => {
  const { profile } = req.body;
  const isValid = await validation(profile);
  if (isValid === 'ok') {
    try {
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
  } else {
    res.sendStatus(403);
  }
});

router.put('/edit', async (req, res) => {
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
