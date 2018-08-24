import HonestyStoreUser from '../../helpers/users/HonestyStoreUser';
import * as HomePage from '../../helpers/page_objects/HomePage';
import * as SlackNamePage from '../../helpers/page_objects/SlackNamePage';
import * as specHelper from '../../helpers/specHelper';

const user = new HonestyStoreUser();

describe('The honesty store kiosk slack name page', () => {
    beforeAll(async () => {
        await user.navigatesToHomePage();
        await user.logsIntoKiosk(user.kioskUser.username, user.kioskUser.password);
    });

    beforeEach(async () => {
        //Home
        await user.navigatesToHomePage();
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile();
        //Snack Name
        await user.removeHand();
        await user.clicksConfirmSnack();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('loads with all elements', async () => {
        expect.extend(specHelper.toBeDisplayed);
        let editSnackInstructions = await user.viewsSlackNameInstructionsExists();
        let scrollSelect = await user.viewsSlackNameScrollSelectExists();

        expect(editSnackInstructions).toBeDisplayed(true);
        expect(scrollSelect).toBeDisplayed(true);
    });

    it('returns to home page', async () => {
        await user.clicksSlackNameBackButton();

        await user.waitUntil(user.getCurrentURL != SlackNamePage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
