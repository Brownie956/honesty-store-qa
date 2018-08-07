const ConfirmItemPage = require('../../page_objects/ConfirmItemPage');

module.exports = {
    async removeHand(){
        await this.getElementByClass(ConfirmItemPage.handImage.class);
        return await this.webDriver.executeScript(`document.getElementsByClassName('${ConfirmItemPage.handImage.class}')[0].setAttribute('style', 'display:none');`);
    },

    async clicksConfirmSnack(){
        let confirmButton = await this.getElementByClass(ConfirmItemPage.buttons.confirmSnack.class);
        confirmButton.click();
    },

    async clicksEditSnack(){
        let confirmButton = await this.getElementByClass(ConfirmItemPage.buttons.editSnack.class);
        confirmButton.click();
    }
}
