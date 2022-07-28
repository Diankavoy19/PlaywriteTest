const { test} = require('@playwright/test');
const { RegistrationPage } = require('../pageobjects/PageObjectForRegistrationPage.js');
test.describe("testcase #1", () => {
    test('Go to the main page, click on the registration link,fill in the registration fields and click on the Accept button.', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate();
        await registrationPage.click(registrationPage.RegistrationLink);
        await registrationPage.fillRegistration(registrationPage.UserLogin,"Diana");
        await registrationPage.fillRegistration(registrationPage.PasswordLogin,"1234");
        await registrationPage.fillRegistration(registrationPage.PasswordLoginConfirm,"1234");
        await registrationPage.fillRegistration(registrationPage.Name,"Diana");
        await registrationPage.fillRegistration(registrationPage.Surname,"Voy");
        await registrationPage.fillRegistration(registrationPage.Email,"fghhfghfg@gmail.com");
        await registrationPage.fillRegistration(registrationPage.Nickname,"Di");
        await registrationPage.click(registrationPage.AcceptButton);
        
    });
});
