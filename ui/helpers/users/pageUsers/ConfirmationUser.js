const ConfirmItemPage = require('../../page_objects/ConfirmItemPage');

module.exports = {
    async removeHand(){
        await this.getElementByClass(ConfirmItemPage.handImage.class);
        return await this.webDriver.executeScript(`document.getElementsByClassName('${ConfirmItemPage.handImage.class}')[0].setAttribute('style', 'display:none');`);
    },

    async clicksConfirmSnack(){
        let confirmButton = await this.getElementByXPath(ConfirmItemPage.buttons.confirmSnack.xpath);
        confirmButton.click();
    },

    async clicksEditSnack(){
        let confirmButton = await this.getElementByXPath(ConfirmItemPage.buttons.editSnack.xpath);
        confirmButton.click();
    }
}
