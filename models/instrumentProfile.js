const mongoose = require('mongoose');
const { Schema } = mongoose;

const instrumentSchema = new Schema({
  tpye: String,
  builder: String,
  model: String,
  serialNumber: String,
  year: Number,
  Condition: String,
  purchasedFrom: String,
  purchasePrice: Number,
  image: { data: Buffer, contentType: String },
  notes: String
});
