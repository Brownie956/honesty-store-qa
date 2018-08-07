const HomePage = require('../../page_objects/HomePage');

module.exports = {
    async navigatesToHomePage() {
        this.navigateToPage(HomePage.url);
    },

    async clicksSendReminder() {
        let element = await this.getElementByClass(HomePage.reminderButton.class);
        element.click();
    },

    async viewsSendReminder() {
        let element = await this.getElementByClass(HomePage.reminderButton.class);
        return await element.getText();
    },

    async viewsSendReminderExists() {
        let element = await this.getElementByClass(HomePage.reminderButton.class);
        return await element.isDisplayed();
    },

    async viewsHandImagesExists() {
        let element = await this.getElementByClass(HomePage.images.hands.class);
        return await element.isDisplayed();
    },

    async viewsHomeHeadingExists() {
        let element = await this.getElementByClass(HomePage.text.heading.class);
        return await element.isDisplayed();
    },

    async viewsHomeSubHeadingExists() {
        let element = await this.getElementByClass(HomePage.text.subheading.class);
        return await element.isDisplayed();
    }
}
