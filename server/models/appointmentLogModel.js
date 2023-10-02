const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentLogSchema = new Schema({
  notes: {type: String},
  date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('appointmentLog', appointmentLogSchema);
//module.exports = db;