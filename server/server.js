const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// const dotenv = require('dotenv');
// dotenv.config();

const app = express();
const PORT = 3000;

const userRouter = require('./routes/user');

// mongoose.connect(`${process.env.MONGO_URL}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });
//parsing any json data
app.use(express.json());
//parsing cookies
app.use(cookieParser());

app.use('/user', userRouter);

app.use(express.static(path.resolve(__dirname, '../build')));

//404 ErrorHandler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
