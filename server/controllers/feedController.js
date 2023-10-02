const Cat = require('../models/catModel');
const FeedingLog = require('../models/feedingLogModel');

const feedController = {};

feedController.update = async (req, res, next) => {
  console.log('Update controller hit')
  try {
    const { hungry } = req.body;
    const newFeed = await FeedingLog.create({food: 'Lasagna', amount: 1})
    const currentCat = await Cat.findOne({name: 'Gilbert'});
    currentCat.feedingLog.push(newFeed);
    currentCat.lastFed = Date.now()
    currentCat.hungry = hungry;
    await currentCat.save();
    res.locals.feedUpdate = hungry;
    return next();
  } catch (err) {
    return next ({
      log: 'An error was caught in feedController.update',
      status: 404,
      message: {err: 'An error occured while trying to feed your cat'}
    });
  }
}

module.exports = feedController;