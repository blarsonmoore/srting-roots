const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProfileSchema = new Schema({
  userName: String,
  userAbout: String,
  userImg: { data: Buffer, contentType: String }
});

mongoose.model('userProfile', userProfileSchema);
