const honestyStoreUser = require('../helpers/users/HonestyStoreUser');

const user = new honestyStoreUser.HonestyStoreUser();

describe('The honesty store kiosk', () => {
    beforeAll(async () => {
        await user.navigatesToHomePage();
    });

    afterAll(async () => {
        // await user.browserQuit();
    });

    it('identifies an item and sends a slack reminder', async () => {
        // expected = await user.viewsSendReminder();
        // expect(expected).toEqual('Send a reminder');

        await user.clicksSendReminder();

        await user.clicksAcceptDisclaimer();

        await user.injectWebcam();
        await user.clicksFileUpload();
        await user.uploadsFile();

    });
});