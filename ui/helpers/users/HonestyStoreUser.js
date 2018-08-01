const {User} = require('./User');
const HomePage = require('../page_objects/HomePage'); //TODO move all page requires to separate helper
const DisclaimerPage = require('../page_objects/DisclaimerPage');
const ScanItemPage = require('../page_objects/ScanItemPage');
const path = require('path');
const sleep = (ms) => new Promise((resolve) => {
setTimeout(resolve, ms);
});


class HonestyStoreUser extends User {
    constructor() {
        super();
    }

    async injectWebcam() {
        await sleep(10000); //TODO tidy me
        return await this.webDriver.executeScript('injectWebcam({isDetecting: false, cameraConnected: true})');
    }

    //TODO move page specific actions into separate page 'actions' class
    //Home page ****************
    async navigatesToHomePage() {
        this.navigateToPage(HomePage.url);
    }

    async clicksSendReminder() {
        let element = await this.getElementByClass(HomePage.reminderButton.class);
        element.click();
    }

    async viewsSendReminder() {
        let element = await this.getElementByClass(HomePage.reminderButton.class);
        element.getText();
    }

    //Disclaimer page ***************
    async clicksAcceptDisclaimer() {
        let element = await this.getElementByClass(DisclaimerPage.acceptButton.class);
        element.click();
    }

    //Scan item page ****************
    async uploadsFile(filePath = `${path.resolve(__dirname)}\\..\\..\\assets\\thinking_man.png`) {
        let element = await this.getElementById(ScanItemPage.fileUpload.browse.id);
        element.sendKeys(filePath);
    }
}

module.exports.HonestyStoreUser = HonestyStoreUser
