const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');
const EditSnackPage = require('../../helpers/page_objects/EditSnackPage');
const HomePage = require('../../helpers/page_objects/HomePage');
const specHelper = require('../../helpers/specHelper');

const user = new HonestyStoreUser();

describe('The honesty store kiosk edit snack page', () => {
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
