const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {}; //

userController.create = async (req, res, next) => {
  //
  try {
    console.log('inside create middleware')
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res.status(400).json('Missing values!');
    }
    const checkEmailExists = await User.findOne({ email });
    if (!checkEmailExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({ email, name, password: hashedPassword });
      res.locals.userId = user._id;
      return next();
    } else {
      return res.status(400).json('Email already exists!');
    }
  } catch (err) {
    return next({
      log: 'An error was caught in userController.create', //
      status: 404,
      message: { err: 'An error occured while creating your account' }, //
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json('Missing values!');
    }
    const user = await User.findOne({ email });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json('Invalid username or password');
    } else {
      res.locals.userId = user._id;
      return next();
    }
  } catch (err) {
    return next({
      log: 'An error was caught in userController.verifyUser', //
      status: 404,
      message: { err: 'An error occured while verifying your account' }, //
    });
  }
};

userController.signOut = async (req, res, next) => {
  try {
    res.clearCookie('ssid');
    
    console.log('cookie cleared');
    return next();
  } catch (e) {
    return next({
      log: 'An error was caught in userController.signOut', //
      status: 500,
      message: { err: 'An error occured during signout' }, //
    });
  }
};

module.exports = userController; //
