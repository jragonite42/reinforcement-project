const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {type: String, required: true},
  lastFed: {type: Date, default: Date.now()},
  lastAppointment: {type: Date, default: Date.now()},
  lastCleaned: {type: Date, default: Date.now()},
  lastGroomed: {type: Date, default: Date.now()},
  feedingLog: {type: Array, default: []},
  appointmentLog: {type: Array, default: []},
  hygieneLog: {type: Array, default: []},
  groomingLog: {type: Array, default: []},
  hungry: {type: Boolean, default: true},
  healthy: {type: Boolean, default: false},
  clean: {type: Boolean, default: false},
  groom: {type: Boolean, default: false},
})

module.exports = mongoose.model('Cat', catSchema);
//module.exports = db;