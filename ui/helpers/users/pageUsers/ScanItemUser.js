const ScanItemPage = require('../../page_objects/ScanItemPage');
const path = require('path');

module.exports = {
    async injectWebcam() {
        this.waitForElementLocated(ScanItemPage.header.css, 'css');
        return await this.webDriver.executeScript('injectWebcam({isDetecting: false, cameraConnected: true})');
    },

    async uploadsFile(filePath = `${path.resolve(__dirname)}\\..\\..\\..\\assets\\thinking_man.png`) {
        let element = await this.getElementById(ScanItemPage.fileUpload.browse.id);
        element.sendKeys(filePath);
    }
}