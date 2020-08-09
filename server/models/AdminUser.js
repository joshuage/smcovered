const mongoose = require('mongoose');

const adminUserSchema = mongoose.Schema({
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
    // required: true
  },
})

module.exports = adminUser = mongoose.model('adminUser', adminUserSchema);