const DisclaimerPage = require('../../page_objects/DisclaimerPage');

module.exports = {
    async clicksAcceptDisclaimer() {
        let element = await this.getElementByClass(DisclaimerPage.acceptButton.class);
        element.click();
    }
}