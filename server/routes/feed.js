const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController.js');

router.put('/', feedController.update, (req, res) => {
  return res.status(200).json({fed: res.locals.feedUpdate})
});

module.exports = router; 