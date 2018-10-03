const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const UserProfile = mongoose.model('userProfile');

module.exports = app => {
  app.post('/api/userprofile', requireLogin, async (req, res) => {
    const { userName, userBio, userImg, instruments } = req.body;

    const userProfile = new UserProfile({
      userName,
      userBio,
      userImg,
      // instruments: instruments.split(',').map(instruments => ({ instruments })),
      _user: req.user.id
    });
    
      await userProfile.save();
    
    }
  });
};
