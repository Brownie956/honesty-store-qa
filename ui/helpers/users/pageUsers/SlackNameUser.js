const SlackNamePage = require('../../page_objects/SlackNamePage');

module.exports = {
    async clicksAccountName(name) {
        let element = await this.getElementByXPath(SlackNamePage.getAccountXPath(name));
        await this.focusOnElement(element);
        element.click();
    },

    async clicksConfirmSlackMessage() {
        let element = await this.getElementByClass(SlackNamePage.buttons.confirm.class);
        element.click();
    },

    async viewsSlackNameInstructionsExists() {
        let element = await this.getElementByClass(SlackNamePage.header.instructions.class);
        return await element.isDisplayed();
    },

    async viewsSlackNameScrollSelectExists() {
        let element = await this.getElementById(SlackNamePage.scrollSelect.id);
        return await element.isDisplayed();
    }
}
