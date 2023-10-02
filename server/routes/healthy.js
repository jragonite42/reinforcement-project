const express = require('express');
const router = express.Router();
const healthyController = require('../controllers/healthyController.js');

router.put('/', healthyController.update, (req, res) => {
    return res.status(200).json({healthy: res.locals.healthy})
});

module.exports = router; 