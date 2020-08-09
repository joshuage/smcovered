const mongoose = require('mongoose');

const basicUserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

module.exports = basicUser = mongoose.model('basicUser', basicUserSchema);