const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');

const user = new HonestyStoreUser();

describe('The honesty store kiosk', () => {
    beforeAll(async () => {
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
        let sendReminder = await user.viewsSendReminder();
        expect(sendReminder).toEqual('Send a reminder');
    });
});
