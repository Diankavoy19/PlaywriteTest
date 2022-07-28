const { test, expect } = require('@playwright/test');
const { Filter } = require('../pageobjects/PageObjectForFilter.js');
test.describe("testcase #4", () => {
    test('Go to the main page, click on the Tasks Link,add and change Priority filter and Category filter,click on the Apply button,click on the first task and verify some text on the page', async ({ page }) => {
        const filter = new Filter(page);
        await filter.navigate();
        await filter.click(filter.TaskLink);
        await filter.chooseIndexInDropdown(filter.AddFilters, 3);
        await filter.chooseIndexInDropdown(filter.AddFilters, 8);
        await filter.chooseIndexInDropdown(filter.AddFilterPriority, 1);
        await filter.chooseIndexInDropdown(filter.AddFilterCategory, 4);
        await filter.click(filter.ApplyButton);
        await filter.click(filter.FirstTask);
        await expect(filter.TextOfFirstTask).toHaveText('Redmine Calendar is not listing issues');
    });
});