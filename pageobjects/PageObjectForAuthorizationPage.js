exports.AuthorizationPage =class AuthorizationPage {
    constructor(page) {
        this.page = page;
        this.AuthorizationLink = page.locator('[href="/login"]');
        this.UserName = page.locator('input#username');
        this.Password = page.locator('#password');
        this.SubmitButton = page.locator('[type="submit"]');
        this.ErrorText = page.locator('#flash_error');
      };
      async click(Element) {
        await Element.click({force: true, noWaitAfter: false});
        await this.page.waitForLoadState("networkidle")
      }
      async navigate() {
        await this.page.goto('https://www.redmine.org/');
      };
      async fillRegistration(Element,text) {
        await Element.fill(text);
      };
};
