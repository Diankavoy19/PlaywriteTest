const { test, expect } = require('@playwright/test');
const { AuthorizationPage } = require('../pageobjects/PageObjectForAuthorizationPage.js');
test.describe("testcase #2", () => {
    test('Go to the main page, click on the login link,fill username and password and click on the Submit button,check that text after click is correct and take a screenshot', async ({ page }) => {
        const authorizationPage = new AuthorizationPage(page);
        await authorizationPage.navigate();
        await authorizationPage.click(authorizationPage.AuthorizationLink);
        await authorizationPage.fillRegistration(authorizationPage.UserName,"Diana");
        await authorizationPage.fillRegistration(authorizationPage.Password,"1234");
        await authorizationPage.click(authorizationPage.SubmitButton);
        await expect(authorizationPage.ErrorText).toHaveText('Invalid user or password');
        await page.screenshot({ path: 'screenshot.png' });
    });
});