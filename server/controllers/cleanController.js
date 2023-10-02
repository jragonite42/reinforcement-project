const Cat = require('../models/catModel');
const CleaningLog = require('../models/hygieneLogModel'); //

const cleanController = {}; //

cleanController.update = async (req, res, next) => { //
  try {
    const { clean } = req.body; //
    const newLog = await CleaningLog.create({}); //
    const currentCat = await Cat.findOne({name: 'Gilbert'});
    currentCat.hygieneLog.push(newLog); //
    currentCat.lastCleaned = Date.now() //
    currentCat.clean = clean; //
    await currentCat.save();
    res.locals.clean = clean; //
    return next();
  } catch (err) {
    return next ({
      log: 'An error was caught in cleanController.update', //
      status: 404,
      message: {err: 'An error occured while trying to clean the cat'} //
    });
  }
}

module.exports = cleanController; //