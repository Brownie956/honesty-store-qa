import { By, until } from 'selenium-webdriver';
import * as config from '../../config/config';

export default class User {
    constructor() {
        this.webDriver = config.setup();
    }

    async waitForDuration(durationMillis) {
        return this.webDriver.sleep(durationMillis);
    }

    async waitUntil(condition, timeout = 20000) {
        return this.webDriver.wait(() => {
            return condition;
        }, timeout)
    }

    async waitUntilElementNotPresent(locator, timeout = 20000) {
        return this.webDriver.wait(() => {
            return this.webDriver.findElements(locator).then((elements) => {
                return elements.length <= 0;
            });
        }, timeout);
    }

    async waitForElementLocated(selector, selectorType, timeout = 20000) {
        return this.webDriver.wait(until.elementLocated(
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
                    case 'name':
                        return By.name(selector);
                    default:
                        throw new Error(`Invalid selectorType: ${selectorType}`);
                }
            })()
        ), timeout);
    }

    async focusOnElement(element) {
        return this.webDriver.executeScript("arguments[0].scrollIntoView(false);", element);
    }

    async getElementById(id, timeout = 20000) {
        return this.waitForElementLocated(id, 'id', timeout);
    }
    
    async getElementByXPath(xpath, timeout = 20000) {
        return this.waitForElementLocated(xpath, 'xpath', timeout);
    }

    async getElementByClass(className, timeout = 20000) {
        return this.waitForElementLocated(className, 'class', timeout);
    }

    async getElementByCSS(css, timeout = 20000) {
        return this.waitForElementLocated(css, 'css', timeout);
    }

    async getElementByName(name, timeout = 20000) {
        return this.waitForElementLocated(name, 'name', timeout);
    }
    
    async navigateToPage(url) {
        return this.webDriver.get(url);
    }

    async viewsCurrentURL() {
        return this.webDriver.getCurrentUrl();
    }

    async browserQuit(){
        return this.webDriver.quit();
    }
}
