const express = require('express');
const router = express.Router();
const cleanController = require('../controllers/cleanController.js');

router.put('/', cleanController.update, (req, res) => {
    return res.status(200).json({clean: res.locals.clean})
});

module.exports = router;