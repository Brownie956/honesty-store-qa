const {By, until} = require('selenium-webdriver');
const config = require('../../config/config');

class User {
    constructor() {
        this.webDriver = config.setup();
    }

    async waitUntil(condition, timeout = 20000) {
        return await this.webDriver.wait(() => {
            return condition;
        }, timeout)
    }

    async waitForElementLocated(selector, selectorType, timeout = 20000) {
        return await this.webDriver.wait(until.elementLocated(
            (() => {
                switch(selectorType) {
                    case 'id':
                        return By.id(selector);
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

    async focusOnElement(element) {
        await this.webDriver.executeScript("arguments[0].scrollIntoView(false);", element);
    }

    async getElementById(id, timeout = 20000) {
        return await this.waitForElementLocated(id, 'id', timeout);
    }
    
    async getElementByXPath(xpath, timeout = 20000) {
        return await this.waitForElementLocated(xpath, 'xpath', timeout);
    }

    async getElementByClass(className, timeout = 20000) {
        return await this.waitForElementLocated(className, 'class', timeout);
    }

    async getElementByCSS(css, timeout = 20000) {
        return await this.waitForElementLocated(css, 'css', timeout);
    }
    
    async navigateToPage(url) {
        await this.webDriver.get(url);
    }

    browserQuit(){
       this.webDriver.quit();
    }
}

module.exports = User;
