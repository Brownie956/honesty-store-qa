const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');
const ScanItemPage = require('../../helpers/page_objects/ScanItemPage');
const HomePage = require('../../helpers/page_objects/HomePage');
const specHelper = require('../../helpers/specHelper');

const user = new HonestyStoreUser();

describe('The honesty store kiosk scan item page', () => {
    beforeEach(async () => {
        await user.navigatesToHomePage();
        await user.clicksSendReminder();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('loads with all elements', async () => {
        expect.extend(specHelper.toBeDisplayed);
        let cameraInstructions = await user.viewsCameraInstructionsExists();
        let cameraOverlay = await user.viewsCameraOverlayExists();

        expect(cameraInstructions).toBeDisplayed(true);
        expect(cameraOverlay).toBeDisplayed(true);
    });

    it('returns to home page', async () => {
        await user.clicksScanItemBackButton();

        await user.waitUntil(user.getCurrentURL != ScanItemPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
