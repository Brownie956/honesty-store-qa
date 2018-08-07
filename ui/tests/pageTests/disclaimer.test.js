const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');
const DisclaimerPage = require('../../helpers/page_objects/DisclaimerPage');
const HomePage = require('../../helpers/page_objects/HomePage');

const user = new HonestyStoreUser();

describe('The honesty store kiosk disclaimer page', () => {
    beforeEach(async () => {
        await user.navigatesToHomePage();
        await user.clicksSendReminder();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('returns back to home page', async () => {
        await user.clicksDisclaimerBackButton();

        await user.waitUntil(user.getCurrentURL != DisclaimerPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
