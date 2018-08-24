import * as HomePage from '../../page_objects/HomePage';

export default {
    async navigatesToHomePage() {
        return this.navigateToPage(HomePage.url);
    },

    async clicksSendReminder() {
        this.waitForDuration(5000); //Hack due to issue #342 (connection error on initial login)
        let element = await this.getElementByClass(HomePage.buttons.noPhoto.class);
        return element.click();
    },

    async viewsSendReminder() {
        let element = await this.getElementByClass(HomePage.buttons.noPhoto.class);
        return element.getText();
    },

    async viewsSendReminderExists() {
        let element = await this.getElementByClass(HomePage.buttons.noPhoto.class);
        return element.isDisplayed();
    },

    async clicksSendSnackChat() {
        let element = await this.getElementByClass(HomePage.buttons.snackChat.class);
        return element.click();
    },

    async viewsSendSnackChat() {
        let element = await this.getElementByClass(HomePage.buttons.snackChat.class);
        return element.getText();
    },

    async viewsSendSnackChatExists() {
        let element = await this.getElementByClass(HomePage.buttons.snackChat.class);
        return element.isDisplayed();
    },

    async viewsHandImagesExists() {
        let element = await this.getElementByClass(HomePage.images.hands.class);
        return element.isDisplayed();
    },

    async viewsHomeHeadingExists() {
        let element = await this.getElementByClass(HomePage.text.heading.class);
        return element.isDisplayed();
    },

    async viewsHomeSubHeadingExists() {
        let element = await this.getElementByClass(HomePage.text.subheading.class);
        return element.isDisplayed();
    }
}
