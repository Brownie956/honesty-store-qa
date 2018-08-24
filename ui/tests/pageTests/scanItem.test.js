import HonestyStoreUser from '../../helpers/users/HonestyStoreUser';
import * as ScanItemPage from '../../helpers/page_objects/ScanItemPage';
import * as HomePage from '../../helpers/page_objects/HomePage';
import * as specHelper from '../../helpers/specHelper';

const user = new HonestyStoreUser();

describe('The honesty store kiosk scan item page', () => {
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
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('loads with all elements', async () => {
        expect.extend(specHelper.toBeDisplayed);
        let cameraInstructions = await user.viewsCameraInstructionsExists();
        // let cameraOverlay = await user.viewsCameraOverlayExists();

        expect(cameraInstructions).toBeDisplayed(true);
        // expect(cameraOverlay).toBeDisplayed(true);
    });

    it('returns to home page', async () => {
        await user.clicksScanItemBackButton();

        await user.waitUntil(user.getCurrentURL != ScanItemPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
