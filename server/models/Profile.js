const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: [String],
  experience: Number,
  location: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);
