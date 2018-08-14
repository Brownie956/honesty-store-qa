const User = require('./User');
const HonestyStorePage = require('../page_objects/Page');

class HonestyStoreUser extends User {
    constructor() {
        super();
        this.kioskUser = {
            username: 'kiosk@honesty.store',
            password: 'ML is tedious'
        }
    }

    async logsIntoKiosk(username, password) {
        let emailLogin = await this.getElementByXPath(HonestyStorePage.login.signInWithEmail.xpath);
        await emailLogin.click();

        let emailInput = await this.getElementByName(HonestyStorePage.login.signInWithEmail.email.name);
        await emailInput.sendKeys(username);

        let submit = await this.getElementByXPath(HonestyStorePage.login.signInWithEmail.submit.xpath);
        await submit.click();

        let passwordInput = await this.getElementByName(HonestyStorePage.login.signInWithEmail.password.name);
        await passwordInput.sendKeys(password);

        submit = await this.getElementByXPath(HonestyStorePage.login.signInWithEmail.submit.xpath);
        await submit.click();

        await this.waitUntilElementNotPresent({id: HonestyStorePage.login.container.id});
    }

    async viewsNotificationText() {
        let notificationText = await this.getElementByXPath(HonestyStorePage.notifications.mainText.xpath);
        return notificationText.getText();
    }

    async viewsNotificationSubText() {
        let notificationText = await this.getElementByXPath(HonestyStorePage.notifications.subText.xpath);
        return notificationText.getText();
    }

    async viewsNotificationDismiss() {
        let notificationText = await this.getElementByXPath(HonestyStorePage.notifications.dismiss.xpath);
        return notificationText.getText();
    }
}

/*
* Mixins for individual page actions
*/ 
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/HomeUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/DisclaimerUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/ScanItemUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/ConfirmationUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/SlackNameUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/SuccessUser'));
Object.assign(HonestyStoreUser.prototype, require('./pageUsers/EditSnackUser'));

module.exports = HonestyStoreUser
