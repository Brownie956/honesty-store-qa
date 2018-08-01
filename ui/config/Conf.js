const driver = require('./Driver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

const driverType = driver.driverType.FIREFOX;

module.exports.driverType = driverType;