exports.SearchBox =class SearchBox {
    constructor(page) {
        this.page = page;
        this.SearchInput = page.locator('#q');
        this.CheckBoxAllWords = page.locator('#all_words');
        this.CheckBoxOnlyTitles = page.locator('#titles_only');
        this.AcceptButton = page.locator('[type="submit"]');
        this.NumberResult = page.locator('#content h3');
      };
      async click(Element) {
        await Element.click({force: true, noWaitAfter: false});
        await this.page.waitForLoadState("networkidle")
      }
      async navigate() {
        await this.page.goto('https://www.redmine.org/');
      };
      async fillSearchInput(text) {
        await this.SearchInput.fill(text);
      };
};