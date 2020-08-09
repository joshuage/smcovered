const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
  },
  area: {
    type: String
  }
})

module.exports = College = mongoose.model('College', CollegeSchema);