const webdriver = require('selenium-webdriver');
const driver = require('../../config/Driver');
const conf = require('../../config/Conf');

class User {
    constructor() {
        const dr = new driver.Driver(conf.driverType);
        this.webDriver = dr.webDriver;
    }

    async waitUntil(condition, timeout = 20000) {
        await this.webDriver.wait(() => {
            return condition;
        }, timeout)
    }

    async waitForElementLocated(selector, selectorType, timeout = 20000) {
        return await this.webDriver.wait(until.elementLocated(
            (() => {
                switch(selectorType) {
                    case 'id':
                        return webdriver.By.id(selector);
                    case 'xpath':
                        return By.xpath(selector);
                    case 'class':
                        return By.className(selector);
                    case 'css':
                        return By.css(selector);
                    default:
                        throw new Error(`Invalid selectorType: ${selectorType}`);
                }
            })()
        ), timeout);
    }

    async getElement(selector, selectorType, timeout = 20000) {
        console.log('********************');
        console.log(`SEARCHING FOR ELEMENT ${selector}`);
        console.log('********************');
        const el = await this.waitForElementLocated(selector, selectorType, timeout);
        console.log('********************');
        console.log(`ELEMENT ${selector} LOCATED`);
        console.log('********************');
        return await this.webDriver.wait(until.elementIsVisible(el), timeout);
    }

    async getElementById(id, timeout = 20000) {
        return this.getElement(id, 'id', timeout);
    }
    
    async getElementByXPath(xpath, timeout = 20000) {
        return this.getElement(xpath, 'xpath', timeout);
    }

    async getElementByClass(className, timeout = 20000) {
        return this.getElement(className, 'class', timeout);
    }
    
    async navigateToPage(url) {
        await this.webDriver.get(url);
    }

    browserQuit(){
       this.webDriver.quit();
    }
}

module.exports = User;
