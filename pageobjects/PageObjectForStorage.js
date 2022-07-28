exports.Storage = class Storage {
    constructor(page) {
        this.page = page;
        this.StorageLink = page.locator('#main-menu [href$="repository"]');
        this.AllRevisionsLink = page.locator('[href$="/revisions"]');
        this.CheckboxFirst = page.locator('td.checkbox #cb-12');
        this.CheckboxSecond = page.locator('td.checkbox #cbto-16');
        this.SubmitButton = page.locator('form[action$="/diff"] [type="submit"]');
        this.TextOnThePage = page.locator('#content h2');
      };
      async click(Element) {
        await Element.click({force: true, noWaitAfter: false});
        await this.page.waitForLoadState("networkidle")
      }
      async navigate() {
        await this.page.goto('https://www.redmine.org/');
      };
      async hovertolocator(Element) {
        await Element.scrollIntoViewIfNeeded();
      }
};