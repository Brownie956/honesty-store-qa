import HonestyStoreUser from '../../helpers/users/HonestyStoreUser';
import * as SuccessPage from '../../helpers/page_objects/SuccessPage';
import * as HomePage from '../../helpers/page_objects/HomePage';
import * as specHelper from '../../helpers/specHelper';
import * as path from 'path';

const user = new HonestyStoreUser();

describe('The honesty store kiosk', () => {
    beforeAll(async () => {
        await user.navigatesToHomePage();
        await user.logsIntoKiosk(user.kioskUser.username, user.kioskUser.password);
    });

    beforeEach(async () => {
        await user.navigatesToHomePage();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('identifies an item and sends a slack reminder', async () => {
        expect.extend(specHelper.toBeDisplayed);
        //Home
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile();
        //Snack Name
        await user.removeHand();
        await user.clicksConfirmSnack();
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let successHand = await user.viewsSuccessHandExists();
        expect(successHand).toBeDisplayed(true);

        await user.removeSuccessHand(); //hack

        let reminderMessage = await user.viewsSuccessMessage();
        expect(reminderMessage).toEqual('Reminder sent!');
        expect(successHand).toBeDisplayed(true);
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil((await user.viewsCurrentURL()) != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });

    it('identifies an item incorrectly and allows the user to edit their snack', async () => {
        expect.extend(specHelper.toBeDisplayed);
        //Home
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile();
        //Snack Name
        await user.removeHand();
        await user.clicksEditSnack();
        //Edit Snack
        await user.selectsSnack('Mars Bar');
        await user.clicksConfirmSnackSelection();
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let successHand = await user.viewsSuccessHandExists();
        expect(successHand).toBeDisplayed(true);

        await user.removeSuccessHand(); //hack

        let reminderMessage = await user.viewsSuccessMessage();
        expect(reminderMessage).toEqual('Reminder sent!');
        expect(successHand).toBeDisplayed(true);
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil((await user.viewsCurrentURL()) != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });

    it('fails to identify a snack and allow the user to select their snack', async () => {
        expect.extend(specHelper.toBeDisplayed);
        //Home
        await user.clicksSendReminder();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile(`${path.resolve(__dirname)}\\..\\..\\assets\\empty.png`);
        //Edit Snack
        await user.selectsSnack('Mars Bar');
        await user.clicksConfirmSnackSelection();
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let successHand = await user.viewsSuccessHandExists();
        expect(successHand).toBeDisplayed(true);

        await user.removeSuccessHand(); //hack

        let reminderMessage = await user.viewsSuccessMessage();
        expect(reminderMessage).toEqual('Reminder sent!');
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil((await user.viewsCurrentURL()) != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });

    xit('fails to identify a snack and sends a SnackChat', async () => {
        expect.extend(specHelper.toBeDisplayed);
        //Home
        await user.clicksSendSnackChat();
        //Disclaimer
        await user.clicksAcceptDisclaimer();
        //Scan Item
        await user.injectWebcam();
        await user.uploadsFile(`${path.resolve(__dirname)}\\..\\..\\assets\\empty.png`);
        //Edit Snack
        await user.selectsSnack('Mars Bar');
        await user.clicksConfirmSnackSelection();
        //SnackChat
        //TODO how do we get around this?
        //Slack Name
        await user.clicksAccountName('cbrown');
        await user.clicksConfirmSlackMessage();
        //Success
        let reminderMessage = await user.viewsSuccessMessage();
        let successHand = await user.viewsSuccessHandExists();
        expect(reminderMessage).toEqual('Reminder sent!');
        expect(successHand).toBeDisplayed(true);
        //Final check
        await user.clicksSuccessMessage();
        await user.waitUntil((await user.viewsCurrentURL()) != SuccessPage.url);
        const currentURL = await user.viewsCurrentURL();
        expect(currentURL).toBe(HomePage.url);
    });
});
