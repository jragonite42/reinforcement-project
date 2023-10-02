const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hygieneLogSchema = new Schema({
  notes: {type: String},
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('hygieneLog', hygieneLogSchema);
//module.exports = db;