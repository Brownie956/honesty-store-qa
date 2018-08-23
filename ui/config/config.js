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
        // const profile = `${path.resolve(__dirname)}\\firefoxprofile.default`
        // let options = new firefox.Options().setProfile(profile);

        // this.webDriver = new Builder().forBrowser(driverType).setFirefoxOptions(options).build();
        this.webDriver = new Builder().forBrowser(driverType).build();
        this.webDriver.manage().window().maximize();
    }
}

export function setup() {
    return (new Driver()).webDriver;
}
