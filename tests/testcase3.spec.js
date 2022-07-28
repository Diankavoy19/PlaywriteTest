const { test, expect } = require('@playwright/test');
const { SearchBox } = require('../pageobjects/PageObjectForSearchBox.js');
test.describe("testcase #3", () => {
    test('Go to the main page, click on the Search input,fill text in the Search input,press “Enter”,click on the checkboxes "All words" and “Only titles”,click on the Accept button and verify that number of results is correct.', async ({ page }) => {
        const searchBox = new SearchBox(page);
        await searchBox.navigate();
        await searchBox.click(searchBox.SearchInput);
        await searchBox.fillSearchInput("Search");
        await page.keyboard.press('Enter');
        await searchBox.click(searchBox.CheckBoxAllWords);
        await searchBox.click(searchBox.CheckBoxOnlyTitles);
        await searchBox.click(searchBox.AcceptButton);
        await expect(searchBox.NumberResult).toHaveText('Results (6)');
    });
});