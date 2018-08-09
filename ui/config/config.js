const {Builder} = require('selenium-webdriver');
require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');
const path = require('path');

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
        const profile = `${path.resolve(__dirname)}\\firefoxprofile.default`
        let options = new firefox.Options().setProfile(profile);

        this.webDriver = new Builder().forBrowser(driverType).setFirefoxOptions(options).build();
    }
}

module.exports.setup = () => {
    return (new Driver()).webDriver;
}
