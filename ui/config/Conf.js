const {driverTypes} = require('./Driver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

const driverType = driverTypes.FIREFOX;

module.exports.driverType = driverType;
