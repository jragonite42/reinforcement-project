const Cat = require('../models/catModel');
const AppointmentLog = require('../models/appointmentLogModel'); //

const healthyController = {}; //

healthyController.update = async (req, res, next) => { //
  try {
    const { healthy } = req.body; //
    const newLog = await AppointmentLog.create({}); //
    const currentCat = await Cat.findOne({name: 'Gilbert'});
    currentCat.appointmentLog.push(newLog); //
    currentCat.lastAppointment = Date.now() //
    currentCat.healthy = healthy; //
    await currentCat.save();
    res.locals.healthy = healthy; //
    return next();
  } catch (err) {
    return next ({
      log: 'An error was caught in healthyController.update', //
      status: 404,
      message: {err: 'An error occured while trying to save an appointment'} //
    });
  }
}

module.exports = healthyController; //