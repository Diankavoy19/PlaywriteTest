 exports.RegistrationPage =class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.RegistrationLink = page.locator('[href$="register"]');
        this.UserLogin = page.locator('#user_login');
        this.PasswordLogin = page.locator('#user_password');
        this.PasswordLoginConfirm = page.locator('#user_password_confirmation');
        this.Name = page.locator('#user_firstname');
        this.Surname = page.locator('#user_lastname');
        this.Email = page.locator('#user_mail');
        this.Nickname = page.locator('#user_custom_field_values_3');
        this.AcceptButton = page.locator('[type="submit"]');
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
