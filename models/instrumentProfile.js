const mongoose = require('mongoose');
const { Schema } = mongoose;

const instrumentSchema = new Schema({
  type: String,
  builder: String,
  model: String,
  serialNumber: String,
  year: Number,
  Condition: String,
  purchasedFrom: String,
  purchasePrice: Number,
  image: { data: Buffer, contentType: String },
  notes: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('instrumentProfile', instrumentSchema);
