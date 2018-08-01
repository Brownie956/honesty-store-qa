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
        await user.clicksNavButtonMenu(); //Example
        expected = await user.viewsFirefoxMenu();
        expect(expected).toEqual('Firefox');

        await user.clicksAcceptDisclaimer();

        await user.injectWebcam();
        await user.clicksFileUpload();
        await user.uploadsFile();

    });
});