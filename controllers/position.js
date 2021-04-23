const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function (req,res) {
    try {
        const position = await Position.find({

        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = function (req,res) {
    try {

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = function (req,res) {
    try {

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = function (req,res) {
    try {

    } catch (e) {
        errorHandler(res, e)
    }
}
