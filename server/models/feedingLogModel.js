const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedingLogSchema = new Schema({
  food: {type: String},
  amount: {type: Number},
  fedAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('feedingLog', feedingLogSchema);
//module.exports = db;