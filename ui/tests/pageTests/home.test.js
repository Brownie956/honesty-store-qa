const HonestyStoreUser = require('../../helpers/users/HonestyStoreUser');
const specHelper = require('../../helpers/specHelper');

const user = new HonestyStoreUser();

describe('The honesty store kiosk home page', () => {
    beforeEach(async () => {
        await user.navigatesToHomePage();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('loads with all elements', async () => {
        expect.extend(specHelper.toBeDisplayed);
        let sendReminder = await user.viewsSendReminderExists();
        let sendSnackChat = await user.viewsSendSnackChatExists();
        let handImages = await user.viewsHandImagesExists();
        let heading = await user.viewsHomeHeadingExists();
        let subheading = await user.viewsHomeSubHeadingExists();

        expect(sendReminder).toBeDisplayed(true);
        expect(sendSnackChat).toBeDisplayed(true);
        expect(handImages).toBeDisplayed(true);
        expect(heading).toBeDisplayed(true);
        expect(subheading).toBeDisplayed(true);
    });
});
