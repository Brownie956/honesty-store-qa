import * as DisclaimerPage from '../../page_objects/DisclaimerPage';

export default {
    async clicksAcceptDisclaimer() {
        let element = await this.getElementByClass(DisclaimerPage.buttons.accept.class);
        return element.click();
    },

    async clicksDisclaimerBackButton() {
        let element = await this.getElementByClass(DisclaimerPage.buttons.back.class);
        return element.click();
    }
}