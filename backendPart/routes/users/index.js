const User = require('../../models/User');

module.exports = ({ app }) => {
  app.get('/kill/profiles', async (req, res) => {
    const profiles = await User.find();
    res.json({ profiles });
  });
  app.get('/kill/profiles/new', async (req, res) => {
    await User.create({
      firstName: 'Ivan',
      lastName: 'Petrov',
      about: [2, 4],
    });
    res.send(200);
  });
};
