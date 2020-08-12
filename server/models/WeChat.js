const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WechatSchema = new Schema({
  wechatId: {
    type: String,
    required: true,
  },
  worker: {
    type: Boolean,
    default: false
  },
  competitor: {
    type: Boolean,
    default: false
  },
  ignore: {
    type: Boolean,
    default: false
  },
  status: {
    type: String
  },
  note: {
    type: String
  },
  date: {
    type: Date,
    defaule: Date.now
  },
  groupName: {
    type: String
  },
  college: {
    type: Schema.Types.ObjectId,
    ref: 'College'
  },
  collegeDisplay: {
    type: String,
    required: true
  },
  basicUser: {
    type: Schema.Types.ObjectId,
    ref: 'basicUser'
  },
  amUser: {
    type: Schema.Types.ObjectId,
    ref: 'amUser'
  },
  initalData: {
    type: Boolean,
    default: false
  }
})

module.exports = Wechat = mongoose.model('Wechat', WechatSchema);