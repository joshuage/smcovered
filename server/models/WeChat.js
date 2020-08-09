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

  },
  college: {
    type: Schema.Types.ObjectId,
    ref: 'College'
  }
})

module.exports = Wechat = mongoose.model('Wechat', WechatSchema);