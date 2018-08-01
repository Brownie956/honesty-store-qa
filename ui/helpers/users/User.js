const {By, until} = require('selenium-webdriver');
const conf = require('../../config/Conf');
const driverModule = require('../../config/Driver');

class User {
    constructor() {
        const driver = new driverModule.Driver(conf.driverType);
        this.webDriver = driver.webDriver;
    }

    async getElementById(id, timeout = 20000) {
        const el = await this.webDriver.wait(until.elementLocated(By.id(id)), timeout);
        return await this.webDriver.wait(until.elementIsVisible(el), timeout);
    }
    
    async getElementByXPath(xpath, timeout = 20000) {
        const el = await this.webDriver.wait(until.elementLocated(By.xpath(xpath)), timeout);
        return await this.webDriver.wait(until.elementIsVisible(el), timeout);
    }

    async getElementByClass(className, timeout = 20000) {
        const el = await this.webDriver.wait(until.elementLocated(By.className(className)), timeout);
        return await this.webDriver.wait(until.elementIsVisible(el), timeout);
    }
    
    async navigateToPage(url) {
        await this.webDriver.get(url);
    }

    browserQuit(){
       this.webDriver.quit();
    }
}

module.exports.User = User;