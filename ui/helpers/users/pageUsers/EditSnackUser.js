import * as EditSnackPage from '../../page_objects/EditSnackPage';

export default {
    async viewsEditSnackInstructionsExists() {
        let element = await this.getElementByClass(EditSnackPage.header.instructions.class);
        return element.isDisplayed();
    },

    async viewsEditSnackScrollSelectExists() {
        let element = await this.getElementById(EditSnackPage.scrollSelect.id);
        return element.isDisplayed();
    },

    async clicksConfirmSnack() {
        let element = await this.getElementByXPath(EditSnackPage.buttons.confirm.xpath);
        element.click();
    },

    async clicksEditSnackBackButton() {
        let element = await this.getElementByClass(EditSnackPage.header.back.class);
        element.click();
    },

    async selectsSnack(snackName) {
        let element = await this.getElementByXPath(EditSnackPage.getSnackXPath(snackName));
        await this.focusOnElement(element);
        element.click();
    }
}
