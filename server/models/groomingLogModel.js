const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groomingLogSchema = new Schema({
  notes: {type: String},
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('groomingLog', groomingLogSchema);
//module.exports = db;