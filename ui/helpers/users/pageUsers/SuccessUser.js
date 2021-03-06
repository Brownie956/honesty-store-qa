import * as SuccessPage from '../../page_objects/SuccessPage';

export default {
    async clicksSuccessMessage() {
        let message = await this.getElementByClass(SuccessPage.notification.class);
        return message.click();
    },

    async viewsSuccessMessage() {
        let message = await this.getElementById(SuccessPage.notification.id);
        return message.getText();
    },

    async viewsSuccessHandExists() {
        let element = await this.getElementByClass(SuccessPage.images.successHand.class);
        return element.isDisplayed();
    },

    async removeSuccessHand(){
        await this.getElementByClass(SuccessPage.images.successHand.class);
        return this.webDriver.executeScript(`document.getElementsByClassName('${SuccessPage.images.successHand.class}')[0].setAttribute('style', 'display:none');`);
    },
}
