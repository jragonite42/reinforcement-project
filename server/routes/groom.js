const express = require('express');
const router = express.Router();
const groomController = require('../controllers/groomController.js');

router.put('/', groomController.update, (req, res) => {
    return res.status(200).json({groom: res.locals.groom})
});

module.exports = router; 