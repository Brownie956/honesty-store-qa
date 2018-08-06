const {Builder} = require('selenium-webdriver');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

// Environment config
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

// Driver config
const driverTypes = {
    FIREFOX: 'firefox',
    CHROME: 'chrome'
}

const driverType = driverTypes.FIREFOX;

class Driver {
    constructor() {
        this.webDriver = new Builder().forBrowser(driverType).build();
    }
}

module.exports.setup = () => {
    return (new Driver()).webDriver;
}