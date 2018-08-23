import HonestyStoreUser from '../../helpers/users/HonestyStoreUser';
import * as HomePage from '../../helpers/page_objects/HomePage';
import * as EditSnackPage from '../../helpers/page_objects/EditSnackPage';
import * as specHelper from '../../helpers/specHelper';

const user = new HonestyStoreUser();

describe('The honesty store kiosk edit snack page', () => {
    beforeEach(async () => {
        //Home
        await user.navigatesToHomePage();
        await user.logsIntoKiosk(user.kioskUser.username, user.kioskUser.password);
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile();
        //Snack Name
        await user.removeHand();
        await user.clicksEditSnack();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('loads with all elements', async () => {
        expect.extend(specHelper.toBeDisplayed);
        let editSnackInstructions = await user.viewsEditSnackInstructionsExists();
        let scrollSelect = await user.viewsEditSnackScrollSelectExists();

        expect(editSnackInstructions).toBeDisplayed(true);
        expect(scrollSelect).toBeDisplayed(true);
    });

    it('returns to home page', async () => {
        await user.clicksEditSnackBackButton();

        await user.waitUntil(user.getCurrentURL != EditSnackPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
