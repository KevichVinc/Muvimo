module.exports = ({ app, db }) => {
  app.get('/profiles', async (req, res) => {
    const profiles = await db.collection('users').find({}).toArray();
    res.json({ profiles });
  });
};
