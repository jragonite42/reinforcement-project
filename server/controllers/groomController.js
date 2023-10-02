const Cat = require('../models/catModel');
const GroomingLog = require('../models/groomingLogModel'); //

const groomController = {}; //

groomController.update = async (req, res, next) => { //
  try {
    const { groom } = req.body; //
    const newLog = await GroomingLog.create({}); //
    const currentCat = await Cat.findOne({name: 'Gilbert'});
    currentCat.groomingLog.push(newLog); //
    currentCat.lastGroomed = Date.now() //
    currentCat.groom = groom; //
    await currentCat.save();
    res.locals.groom = groom; //
    return next();
  } catch (err) {
    return next ({
      log: 'An error was caught in groomController.update', //
      status: 404,
      message: {err: 'An error occured while trying to groom the cat'} //
    });
  }
}

module.exports = groomController; //