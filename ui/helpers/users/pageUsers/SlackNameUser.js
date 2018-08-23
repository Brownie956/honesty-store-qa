import * as SlackNamePage from '../../page_objects/SlackNamePage';

export default {
    async clicksAccountName(name) {
        let element = await this.getElementByXPath(SlackNamePage.getAccountXPath(name));
        await this.focusOnElement(element);
        element.click();
    },

    async clicksConfirmSlackMessage() {
        let element = await this.getElementByXPath(SlackNamePage.buttons.confirm.xpath);
        element.click();
    },

    async viewsSlackNameInstructionsExists() {
        let element = await this.getElementByClass(SlackNamePage.header.instructions.class);
        return element.isDisplayed();
    },

    async viewsSlackNameScrollSelectExists() {
        let element = await this.getElementById(SlackNamePage.scrollSelect.id);
        return element.isDisplayed();
    }
}
