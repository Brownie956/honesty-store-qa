import HonestyStoreUser from '../../helpers/users/HonestyStoreUser';
import * as DisclaimerPage from '../../helpers/page_objects/DisclaimerPage';
import * as HomePage from '../../helpers/page_objects/HomePage';

const user = new HonestyStoreUser();

describe('The honesty store kiosk disclaimer page', () => {
    beforeAll(async () => {
        await user.navigatesToHomePage();
        await user.logsIntoKiosk(user.kioskUser.username, user.kioskUser.password);
    });

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
