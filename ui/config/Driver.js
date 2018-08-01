const {Builder} = require('selenium-webdriver');
const JSExecutor = require('selenium-webdriver/')
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

const driverType = {
    FIREFOX: 'firefox',
    CHROME: 'chrome'
}

class Driver {
    constructor(driverType) {
        this.webDriver = new Builder().forBrowser(driverType).build();
    }
}

module.exports.Driver = Driver;
module.exports.driverType = driverType;