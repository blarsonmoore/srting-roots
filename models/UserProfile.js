const mongoose = require('mongoose');
const { Schema } = mongoose;
const instrumentSchema = require('./instrumentProfile');

const userProfileSchema = new Schema({
  userName: String,
  userBio: String,
  userImg: { data: Buffer, contentType: String },
  instruments: [instrumentSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('userProfile', userProfileSchema);
