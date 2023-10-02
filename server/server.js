const path = require('path');
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const dbConnect = require('./db.js');

// HANDLE PARSE, FORM DATA, AND CORS //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dbConnect();

// ROUTERS //
const feedRouter = require('./routes/feed.js');
const catRouter = require('./routes/cat.js');
const healthyRouter = require('./routes/healthy.js');
const cleanRouter = require('./routes/clean.js');
const groomRouter = require('./routes/groom.js');

// DEFINE ROUTE HANDLERS //
app.use('/api/feed', feedRouter);
app.use('/api/cat', catRouter);
app.use('/api/healthy', healthyRouter);
app.use('/api/clean', cleanRouter);
app.use('/api/groom', groomRouter);

// HANDLE STATIC FILES //
app.use(express.static(path.resolve(__dirname, '../build')));

// Global 404 handler
app.use('*', (req, res) => {
  res.status(404).send('File not found');
})

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
