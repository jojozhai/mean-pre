/**
 * Created by zhailiang on 2017/4/14.
 */
const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    return mongoose.connect(config.db);
}