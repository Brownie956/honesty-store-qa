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

    async clicksConfirmSnackSelection() {
        let element = await this.getElementByXPath(EditSnackPage.buttons.confirm.xpath);
        return element.click();
    },

    async clicksEditSnackBackButton() {
        let element = await this.getElementByClass(EditSnackPage.header.back.class);
        return element.click();
    },

    async selectsSnack(snackName) {
        let element = await this.getElementByXPath(EditSnackPage.getSnackXPath(snackName));
        await this.focusOnElement(element);
        return element.click();
    }
}
