const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  requirements: [String],
  location: String,
  salary: Number,
});

module.exports = mongoose.model('Job', JobSchema);
