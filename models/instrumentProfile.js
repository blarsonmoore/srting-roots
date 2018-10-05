const mongoose = require('mongoose');
const { Schema } = mongoose;

const instrumentSchema = new Schema({
  type: String,
  builder: String,
  model: String,
  serialNumber: String,
  year: String,
  Condition: String,
  purchasedFrom: String,
  purchasePrice: String,
  image: String,
  notes: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('instrumentProfile', instrumentSchema);
