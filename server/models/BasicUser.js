const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  // title: {
  //   type: String,
  //   // required: true
  // },
  college: {
    type: Schema.Types.ObjectId,
    ref: 'College'
  },
  collegeDisplay: {
    type: String,
    required: true
  },
  area: {
    type: String
  }
})

module.exports = basicUser = mongoose.model('basicUser', basicUserSchema);