const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');
const SuccessPage = require('../../helpers/page_objects/SuccessPage');
const HomePage = require('../../helpers/page_objects/HomePage');

const user = new HonestyStoreUser();

describe('The honesty store kiosk', () => {
    beforeEach(async () => {
        await user.navigatesToHomePage();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('identifies an item and sends a slack reminder', async () => {
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
        expect(reminderMessage).toEqual('Reminder sent!');
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil(user.getCurrentURL != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });

    it('identifies an item incorrectly and allows the user to edit their snack', async () => {
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
        expect(reminderMessage).toEqual('Reminder sent!');
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil(user.getCurrentURL != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });

    it('fails to identify a snack and allow the user to select their snack', async () => {
        //Home
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile(); //TODO Select an item that doesn't identify
        //Edit Snack
        await user.selectsSnack('Mars Bar');
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let reminderMessage = await user.viewsSuccessMessage();
        expect(reminderMessage).toEqual('Reminder sent!');
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil(user.getCurrentURL != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
