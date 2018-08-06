const SlackNamePage = require('../../page_objects/SlackNamePage');

module.exports = {
    async clicksAccountName(name) {
        let element = await this.getElementByXPath(SlackNamePage.getAccountXPath(name));
        await this.focusOnElement(element);
        element.click();
    }
}
