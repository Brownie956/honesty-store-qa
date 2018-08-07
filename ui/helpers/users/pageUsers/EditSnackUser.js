const EditSnackPage = require('../../page_objects/EditSnackPage');

module.exports = {
    async viewsEditSnackInstructionsExists() {
        let element = await this.getElementByClass(EditSnackPage.header.instructions.class);
        return await element.isDisplayed();
    },

    async viewsEditSnackScrollSelectExists() {
        let element = await this.getElementById(EditSnackPage.scrollSelect.id);
        return await element.isDisplayed();
    },

    async clicksEditSnackBackButton() {
        let element = await this.getElementByClass(EditSnackPage.header.back.class);
        element.click();
    },

    async selectsSnack(snackName) {
        let element = this.getElementByXPath(EditSnackPage.getSnackXPath(snackName));
        await this.focusOnElement(element);
        element.click();
    }
}
