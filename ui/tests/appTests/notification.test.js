import HonestyStoreUser from '../../helpers/users/HonestyStoreUser';
import * as DisclaimerPage from '../../helpers/page_objects/DisclaimerPage';
import * as HomePage from '../../helpers/page_objects/HomePage';

const user = new HonestyStoreUser();

describe('The honesty store kiosk', () => {
    beforeEach(async () => {
        await user.navigatesToHomePage();
        await user.logsIntoKiosk(user.kioskUser.username, user.kioskUser.password);
        await user.clicksSendReminder();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('shows a timeout notification and returns to the home page', async () => {
        
        await user.waitUntil((await user.viewsCurrentURL()) == DisclaimerPage.url);
        await user.waitForDuration(45000);

        let notificationText = await user.viewsNotificationText();
        let notificationDismiss = await user.viewsNotificationDismiss();
        
        expect(notificationText).toEqual('Are you still there?');
        expect(notificationDismiss).toEqual('DISMISS');

        await user.waitForDuration(20000);
        await user.waitUntil((await user.viewsCurrentURL()) != DisclaimerPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
