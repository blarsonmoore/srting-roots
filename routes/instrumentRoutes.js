const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const InstrumentProfile = mongoose.model('instrumentProfile');

module.exports = app => {
  app.get('/api/instrumentprofile', requireLogin, async (req, res) => {
    const instrument = await InstrumentProfile.find({ _user: req.user.id }).select({
      type: true,
      builder: true,
      model: true,
      serialNumber: true,
      year: true,
      Condition: true,
      purchasedFrom: true,
      purchasePrice: true,
      image: true,
      notes: true
    });
    res.send(instrument);
  });

  app.post('/api/instrumentprofile', requireLogin, async (req, res) => {
    const {
      type,
      builder,
      model,
      serialNumber,
      year,
      Condition,
      purchasedFrom,
      purchasePrice,
      image,
      notes
    } = req.body;

    const instrumentProfile = new InstrumentProfile({
      type,
      builder,
      model,
      serialNumber,
      year,
      Condition,
      purchasedFrom,
      purchasePrice,
      image,
      notes,
      _user: req.user.id
    });

    await instrumentProfile.save();
  });
};
