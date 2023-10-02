const { default: mongoose } = require('mongoose');

// IMPORTANT NOTE TO WHOEVER IS WORKING ON THE DATABASE!!!

// This DB is hosted on Atlas under Nathan's account. You will need to either:

// 1). Change the provider and set up your own database connection
// 2). Reach out to Nathan for IP access

dbConnect = () => {
  mongoose.connect('mongodb+srv://iamkaprekar:5o6gNZvaMtaiXqCv@cluster0.bxo9zd6.mongodb.net/?retryWrites=true&w=majority');
  // mongoose.connect('mongodb://localhost:27017');
};

module.exports = dbConnect;