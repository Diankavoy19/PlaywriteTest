const { test, expect } = require('@playwright/test');
const { Storage } = require('../pageobjects/PageObjectForStorage.js');
test.describe("testcase #5", () => {
    test('Go to the main page, click on the Storage Link,click on the link with all revisions,click on the any checkboxes,move and click to the Submit button and verify some text on the page', async ({ page }) => {
        const storage = new Storage(page);
        await storage.navigate();
        await storage.click(storage.StorageLink);
        await storage.click(storage.AllRevisionsLink);
        await storage.click(storage.CheckboxFirst);
        await storage.click(storage.CheckboxSecond);
        await storage.hovertolocator(storage.SubmitButton);
        await storage.click(storage.SubmitButton);
        await expect(storage.TextOnThePage).toHaveText('Revision 21728:21732');
    });
});