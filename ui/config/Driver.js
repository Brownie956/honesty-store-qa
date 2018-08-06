const webdriver = require('selenium-webdriver');
const conf = require('./Conf');
const proxy = require('selenium-webdriver/proxy');
const nock = require('nock');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');
require('geckodriver');

module.exports.driverTypes = {
    FIREFOX: 'firefox',
    CHROME: 'chrome'
}

class Driver {
    constructor(type) {

        let interceptor = nock(/slack\.com/)
            .post(/api\/chat\.postMessage.*/)
            .reply(200, {ok: 200});

        // let caps = webdriver.Capabilities.firefox();
        // caps.setProxy(proxy.manual({http: {'localhost:4000', https: 'localhost:4000'}}))

        this.driverType = type;
        this.webDriver = new webdriver.Builder()
        .forBrowser(driverType)
        // .withCapabilities(caps)
        // .setProxy(proxy.manual({https: 'localhost:4000'}))
        .build();
    }
}

module.exports.Driver = Driver;
