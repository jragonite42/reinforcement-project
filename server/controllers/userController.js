const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {}; //

userController.create = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res.sendStatus(400).sendJSON('Missing values!');
    }
    const checkEmailExists = await User.findOne({ email });
    if (!checkEmailExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        email,
        name,
        password: hashedPassword,
        totalPoints: 0,
      });
      res.locals.userId = user._id;
      return next();
    } else {
      return res.sendStatus(400).sendJSON('Email already exists!');
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
  //
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400).sendJSON('Missing values!');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.findOne({ email });
    if (!user) {
      return res.sendStatus(400).sendJSON('Username or password is not found!');
    } else {
      try {
        if (user.password === hashedPassword) {
          res.locals.userId = user._id;
          return next();
        } else {
          return res.sendStatus(400).sendJSON('Password is incorrect!');
        }
      } catch {
        return next({
          log: 'An error was caught in userController.create', //
          status: 404,
          message: { err: 'An error occured while verifying your account' }, //
        });
      }
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
