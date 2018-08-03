const ConfirmItemPage = require('../../page_objects/ConfirmItemPage');

module.exports = {
    async removeHand(){
        this.waitForElementLocated(ConfirmItemPage.handImage.class, 'class');
        return await this.webDriver.executeScript(`document.getElementsByClassName('${ConfirmItemPage.handImage.class}')[0].setAttribute('style', 'display:none');`);
    },

    async clicksConfirmSnack(){
        let confirmButton = await this.waitForElementLocated(ConfirmItemPage.buttons.confirmSnack.class, 'class');
        confirmButton.click();
    }
}
