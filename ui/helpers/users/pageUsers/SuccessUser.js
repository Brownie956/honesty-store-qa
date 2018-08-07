const SuccessPage = require('../../page_objects/SuccessPage');

module.exports = {
    async clicksSuccessMessage() {
        let message = await this.getElementByClass(SuccessPage.notification.class);
        message.click();
    },

    async viewsSuccessMessage() {
        let message = await this.getElementByClass(SuccessPage.notification.class);
        return message.getText();
    },

    async viewsSuccessHandExists() {
        let element = await this.getElementByClass(SuccessPage.images.successHand.class);
        return await element.isDisplayed();
    }
}
