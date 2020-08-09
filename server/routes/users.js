const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String
  },
  active: {
    type: Boolean
  }
})

module.exports = User = mongoose.model('User', UserSchema);