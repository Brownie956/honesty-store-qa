import { Builder } from 'selenium-webdriver';
import mySeleniumChromeDefault from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';
import myChromeDefault from 'chromedriver';
import myGeckoDefault from 'geckodriver';
import * as path from 'path';

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
        this.webDriver.manage().window().maximize();
    }
}

export function setup() {
    return (new Driver()).webDriver;
}
