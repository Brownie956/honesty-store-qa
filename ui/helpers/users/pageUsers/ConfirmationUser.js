import * as ConfirmItemPage from '../../page_objects/ConfirmItemPage';

export default {
    async removeHand(){
        await this.getElementByClass(ConfirmItemPage.handImage.class);
        return this.webDriver.executeScript(`document.getElementsByClassName('${ConfirmItemPage.handImage.class}')[0].setAttribute('style', 'display:none');`);
    },

    async clicksConfirmSnack(){
        let confirmButton = await this.getElementByXPath(ConfirmItemPage.buttons.confirmSnack.xpath);
        return confirmButton.click();
    },

    async clicksEditSnack(){
        let confirmButton = await this.getElementByXPath(ConfirmItemPage.buttons.editSnack.xpath);
        return confirmButton.click();
    }
}
