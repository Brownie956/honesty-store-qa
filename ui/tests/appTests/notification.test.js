const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');
const DisclaimerPage = require('../../helpers/page_objects/DisclaimerPage');
const HomePage = require('../../helpers/page_objects/HomePage');

const user = new HonestyStoreUser();

describe('The honesty store kiosk', () => {
    beforeEach(async () => {
        await user.navigatesToHomePage();
        await user.clicksSendReminder();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('shows a timeout notification and returns to the home page', async () => {
        await user.waitUntil(user.getCurrentURL == DisclaimerPage.url);
        user.waitForDuration(45000);

        let notificationText = await user.viewsNotificationText();
        let notificationDismiss = await user.viewsNotificationDismiss();
        
        expect(notificationText).toEqual('Are you still there?');
        expect(notificationDismiss).toEqual('Dismiss');

        user.waitForDuration(20000);
        await user.waitUntil(user.getCurrentURL != DisclaimerPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
