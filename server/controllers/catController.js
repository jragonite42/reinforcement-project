const catModel = require('../models/catModel');

const catController = {};


catController.getCat = async (req, res, next) => {
    try {
        const cat = await catModel.findOne({ name: "Gilbert" });
        console.log(cat);
        res.locals.cat = cat;
        return next();
    } catch (err) {
        return next({
            status: 404,
        })
    }
}

catController.createCat = async (req, res, next) => {
    console.log('CreateCat hit!')
    try {
        await catModel.create(req.body);
        return next();
    } catch (err) {
        return next({
            status: 404,
        })
    }
}

catController.deleteCat = async (req, res, next) => {
    console.log('Delete cat hit')
    try {
        await catModel.deleteMany({});
        return next();
    } catch (err) {
        return next({
            status: 404,
        })
    }
}

module.exports = catController;