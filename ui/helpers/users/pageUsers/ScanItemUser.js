import * as ScanItemPage from '../../page_objects/ScanItemPage';
import * as path from 'path';

export default {
    async injectWebcam() {
        await this.getElementByCSS(ScanItemPage.header.css);
        return await this.webDriver.executeScript('injectWebcam({isDetecting: false, cameraConnected: true})');
    },

    async uploadsFile(filePath = `${path.resolve(__dirname)}\\..\\..\\..\\assets\\walkers.jpg`) {
        let element = await this.getElementById(ScanItemPage.fileUpload.browse.id);
        await element.isDisplayed();
        await element.sendKeys(filePath);
    },

    async viewsCameraInstructionsExists() {
        let element = await this.getElementByClass(ScanItemPage.header.instructions.class);
        return await element.isDisplayed();
    },

    async viewsCameraOverlayExists() {
        let element = await this.getElementById(ScanItemPage.viewFinder.id);
        return await element.isDisplayed();
    },

    async clicksScanItemBackButton() {
        let element = await this.getElementByClass(ScanItemPage.header.back.class);
        element.click();
    }
}
