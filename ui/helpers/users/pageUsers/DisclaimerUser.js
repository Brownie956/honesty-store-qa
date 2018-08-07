const DisclaimerPage = require('../../page_objects/DisclaimerPage');

module.exports = {
    async clicksAcceptDisclaimer() {
        let element = await this.getElementByClass(DisclaimerPage.buttons.accept.class);
        element.click();
    },

    async clicksDisclaimerBackButton() {
        let element = await this.getElementByClass(DisclaimerPage.buttons.back.class);
        element.click();
    }
}