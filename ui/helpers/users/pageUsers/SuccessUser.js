const SuccessPage = require('../../page_objects/SuccessPage');

module.exports = {
    async clicksSuccessMessage() {
        let message = await this.getElementByClass(SuccessPage.notification.class);
        message.click();
    },

    async viewsSuccessMessage() {
        let message = await this.getElementByClass(SuccessPage.notification.class);
        return message.getText();
    }
}
