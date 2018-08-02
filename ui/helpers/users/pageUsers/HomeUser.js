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
        element.getText();
    }
}