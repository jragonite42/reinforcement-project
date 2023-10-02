const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  totalPoints: { type: Number },
  gameHistory: { type: Array }, //gameHistory = [ {wordsRight : [] , wordsWrong : []. score : num }, ... {} {} ] -- stretch feature
});

module.exports = mongoose.model('user', userSchema);
