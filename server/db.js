const dotenv = require('dotenv');
dotenv.config();
const { default: mongoose } = require('mongoose');

dbConnect = () => {
  mongoose.connect(`${process.env.MONGO_URL}`);
  mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });
};

module.exports = dbConnect;
