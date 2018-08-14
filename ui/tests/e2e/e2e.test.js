const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');
const SuccessPage = require('../../helpers/page_objects/SuccessPage');
const HomePage = require('../../helpers/page_objects/HomePage');
const specHelper = require('../../helpers/specHelper');
const path = require('path');

const user = new HonestyStoreUser();

describe('The honesty store kiosk', () => {
    beforeEach(async () => {
        await user.navigatesToHomePage();
        await user.logsIntoKiosk(user.kioskUser.username, user.kioskUser.password);
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('identifies an item and sends a slack reminder', async () => {
        expect.extend(specHelper.toBeDisplayed);
        //Home
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile();
        //Snack Name
        await user.removeHand();
        await user.clicksConfirmSnack();
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let reminderMessage = await user.viewsSuccessMessage();
        let successHand = await user.viewsSuccessHandExists();
        expect(reminderMessage).toEqual('Reminder sent!');
        expect(successHand).toBeDisplayed(true);
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil(user.getCurrentURL != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });

    it('identifies an item incorrectly and allows the user to edit their snack', async () => {
        expect.extend(specHelper.toBeDisplayed);
        //Home
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile();
        //Snack Name
        await user.removeHand();
        await user.clicksEditSnack();
        //Edit Snack
        await user.selectsSnack('Mars Bar');
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let reminderMessage = await user.viewsSuccessMessage();
        let successHand = await user.viewsSuccessHandExists();
        expect(reminderMessage).toEqual('Reminder sent!');
        expect(successHand).toBeDisplayed(true);
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil(user.getCurrentURL != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });

    it('fails to identify a snack and allow the user to select their snack', async () => {
        expect.extend(specHelper.toBeDisplayed);
        //Home
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile(`${path.resolve(__dirname)}\\..\\..\\assets\\empty.png`);
        //Edit Snack
        await user.selectsSnack('Mars Bar');
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let reminderMessage = await user.viewsSuccessMessage();
        let successHand = await user.viewsSuccessHandExists();
        expect(reminderMessage).toEqual('Reminder sent!');
        expect(successHand).toBeDisplayed(true);
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil(user.getCurrentURL != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
