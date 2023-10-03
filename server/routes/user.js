const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');

router.post(
  '/signup',
  userController.create,
  cookieController.setSSIDCookie,
  (req, res) => {
    // console.log('in the final callback')
    // create cookies + sessions
    return res.status(200).json('User Created!');
  }
);

router.post(
  '/signin',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    // create cookies + sessions
    return res.status(200).json('User Signed In!');
  }
);

router.post('/signout', userController.signOut, (req, res) => {
  // delete the cookies + sessions
  return res.status(200).send('User Signed Out!');
  // return res.redirect('/signin');
});

module.exports = router;
